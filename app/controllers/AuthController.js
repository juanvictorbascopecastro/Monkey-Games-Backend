const {
    User,
    Token,
    Caja,
    Price,
    AperturaCaja,
    CierreCaja,
    ConfigParam,
    sequelize
} = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { Op } = require('sequelize')

module.exports = {
    async signIn(req, res, next) {
        const { email, password } = req.body
        const user = await User.findOne({
            attributes: [
                'id',
                'name',
                'lastName',
                'email',
                'phone',
                'photo',
                'rol',
                'ci',
                'active',
                'password',
                'createdAt'
            ],
            where: {
                email
            }
        })
        // if (err) throw err
        if (!user)
            return res.status(404).json({ message: 'No existe el usuario!' })
        try {
            if (!user) {
                return res.status(400).json({
                    message: 'Datos incorrectos!'
                })
            }

            if (!user.dataValues.active) {
                return res.status(401).json({
                    msg: 'Su cuenta se encuentra desactivada!'
                })
            }

            if (!user.dataValues.password) {
                return res.status(401).json({
                    data: user,
                    msg: 'Su cuenta no cuenta con acceso como cliente!'
                })
            }
            const matchUser = await bcrypt.compare(
                password,
                user.dataValues.password
            )

            if (!matchUser) {
                return res.status(400).json({
                    message: 'Datos Incorrectos!'
                })
            }

            delete user.dataValues.password

            const dataToken = {
                id: user.dataValues.id,
                email: user.dataValues.email,
                rol: user.dataValues.rol
            }

            const token = await jwt.sign(dataToken, process.env.SECRET_KEY, {
                expiresIn: '2d'
            })

            await Token.create({
                idUsers: user.dataValues.id,
                token,
                expire: new Date(Date.now() + 48 * 60 * 60 * 1000)
            })

            return res.status(200).json({
                user,
                token
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg: '¡Error del servidor!'
            })
        }
    },
    async create(req, res, next) {
        try {
            req.body.password = await bcrypt.hash(req.body.password, 10) // encriptamos la nueva contrasenia
            const response = await User.create(req.body)
            delete response.dataValues.password
            delete response.dataValues.recoveryToken
            res.status(200).json({
                msg: 'Usuario registrado correctamente!',
                data: response
            })
        } catch (error) {
            res.status(500).json({
                msg: '¡Error del servidor!'
            })
        }
    },
    getUser(req, res, next) {
        res.send('Configuracion de usuario')
    },
    async update(req, res, next) {
        try {
            let newDate = {}
            if (req.body.name) newDate.name = req.body.name
            if (req.body.lastName) newDate.lastName = req.body.lastName
            if (req.body.phone) newDate.phone = req.body.phone
            if (req.body.email) newDate.email = req.body.email
            if (req.body.ci) newDate.ci = req.body.ci
            if (req.body.rol) {
                if (req.currentUser === 'admin') newDate.rol = req.body.rol // solo un usuario admin puede editar el rol
            }

            if (req.body.password && req.body.password !== '')
                newDate.password = await bcrypt.hash(req.body.password, 10) // encriptamos la nueva contrasenia

            await User.update(newDate, {
                where: {
                    id: req.currentUser.id
                }
            }) // guardamos los datos

            const user = await User.findByPk(req.currentUser.id, {
                attributes: [
                    'id',
                    'name',
                    'lastName',
                    'email',
                    'phone',
                    'photo',
                    'rol',
                    'ci',
                    'active',
                    'createdAt'
                ]
            })
            // eliminamos el token anterior
            Token.destroy({
                where: {
                    token: req.headers.authorization.split(' ')[1]
                }
            })

            // creamos un nuevo token
            const dataToken = {
                id: user.dataValues.id,
                email: user.dataValues.email,
                rol: user.dataValues.rol
            }

            const token = await jwt.sign(dataToken, process.env.SECRET_KEY, {
                expiresIn: '2d'
            })

            await Token.create({
                idUsers: user.dataValues.id,
                token,
                expire: new Date(Date.now() + 48 * 60 * 60 * 1000)
            })

            return res.status(200).json({
                user,
                token
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async signOut(req, res, next) {
        try {
            const token = req.headers.authorization.split(' ')[1]
            await Token.destroy({
                where: {
                    idUsers: req.body.id,
                    token
                }
            })
            res.status(200).json({
                message: 'Logout completed'
            })
        } catch (error) {
            console.log('error: ', error)
            res.status(500).json({
                message: 'Error in the logout'
            })
        }
    },
    async getConfig(req, res) {
        try {
            // devolvemos los datos de usuario
            const user = await User.findByPk(req.currentUser.id, {
                attributes: [
                    'id',
                    'name',
                    'lastName',
                    'email',
                    'phone',
                    'photo',
                    'rol',
                    'ci',
                    'active',
                    'createdAt'
                ]
            })
            // devolvemos las cajas
            const cajas = await Caja.findAll({
                order: [['name', 'ASC']],
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            })
            // obtenemos los ids de las cajas aperturadas
            const idsOpened = cajas
                .filter(obj => obj.dataValues.idOpened !== null)
                .map(obj => obj.dataValues.id)
            // consultamos de acuerdo a las cajas aperturadas
            const aperturas = await AperturaCaja.findAll({
                where: {
                    [Op.and]: [
                        sequelize.where(
                            sequelize.col(`"CierreCaja"."idAperturaCajas"`),
                            null
                        ),
                        { idCajas: idsOpened }
                    ]
                },
                include: [
                    {
                        model: CierreCaja
                    }
                ]
            })
            const config = await ConfigParam.findAll()
            // devolvemos los precios
            const prices = await Price.findAll({
                order: [['minutes', 'ASC']],
                attributes: { exclude: ['createdAt', 'updatedAt'] }
            })
            res.status(200).json({ user, cajas, prices, aperturas, config })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg: 'Error en la solicitud con el servidor!'
            })
        }
    }
}

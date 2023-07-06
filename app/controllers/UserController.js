const bcrypt = require('bcrypt')
const { User, sequelize } = require('../models/index')
const { valueAdmin } = require('./../../config/global')
const attributes = [
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
module.exports = {
    // obtener
    async select(req, res) {
        try {
            const response = await User.findAll({
                order: [['name', 'ASC']],
                attributes
            })
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                msg: 'Error en la solicitud con el servidor!'
            })
        }
    },

    async update(req, res) {
        try {
            const { id } = req.params

            const user = await User.findByPk(id, {
                attributes
            })

            if (!user) {
                return res.status(404).json({
                    msg: `Usuario con el id ${id} no existe!`
                })
            }
            // solo permite editar parametros que no se usan para el acceso
            let newDate = {}
            if (req.body.name) newDate.name = req.body.name
            if (req.body.lastName) newDate.lastName = req.body.lastName
            if (req.body.phone) newDate.phone = req.body.phone
            if (req.body.ci) newDate.ci = req.body.ci
            if (req.body.rol) newDate.rol = req.body.rol
            if (req.body.active !== undefined && req.body.active !== null)
                newDate.active = req.body.active

            await user.update(newDate)
            delete user.dataValues.password

            res.status(200).json({
                msg: 'Usuario editado correctamente',
                data: user
            })
        } catch (error) {
            res.status(500).json({
                msg: 'Error en la solicitud con el servidor!'
            })
        }
    },

    // eliminar
    async delete(req, res) {
        try {
            const { id } = req.params

            const user = await User.findByPk(id)

            if (!user) {
                return res.status(404).json({
                    message: `El usuario con el id ${id} no existe!`
                })
            }
            // const numVentas = await Venta.count({
            //     where: {
            //         idUsers: user.dataValues.User.dataValues.id
            //     }
            // })
            // if (numVentas > 0) {
            //     return res.status(400).json({
            //         message: `No es posible eliminar el usuario, hay ${numVentas} ventas registradas a nombre de este usuario!`
            //     })
            // }

            // const numOccupy = await Occupy.count({
            //     where: {
            //         idUsers: user.dataValues.User.dataValues.id
            //     }
            // })
            // if (numOccupy > 0) {
            //     return res.status(400).json({
            //         message: `No es posible eliminar el usuario, hay ${numOccupy} registros a nombre de este usuario en mesas ocupadas!`
            //     })
            // }

            await user.destroy()
            return res.status(200).json({
                message: 'Usuario eliminado correctamente'
            })
        } catch (error) {
            console.error(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!!'
            })
        }
    },
    // listar por Id
    async getById(req, res) {
        const { id } = req.params
        const response = await User.findByPk(id, {
            attributes
        })
        if (!response) {
            return res.status(404).json({
                message: `User with id ${id} not found!`
            })
        }

        return res.status(200).json(response)
    }
}

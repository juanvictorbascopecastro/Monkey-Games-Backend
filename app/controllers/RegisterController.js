const { Op } = require('sequelize')
const { Register, Client, User, Price } = require('../models/index')
const { getIdApertura } = require('../helpers/query-db')

module.exports = {
    async enCurso(req, res) {
        const response = await Register.findAll({
            include: [{ model: Client }],
            where: {
                status: false
            }
        })
        res.status(200).json(response)
    },
    async create(req, res) {
        try {
            let { price, minutes } = req.body
            if (!price) {
                const valPrice = await Price.findOne({ where: { minutes } })
                if (!valPrice)
                    return res.status(400).json({
                        message: `¡El precio para el minuto ${minutes} no está definido!`
                    })
                price = valPrice.dataValues.price
            }
            if (req.body.idCajas) {
                // obtenemos el id de la apertura
                const idApertura = await getIdApertura(req.body.idCajas)
                if (idApertura) req.body.idAperturaCajas = idApertura
            }
            const data = await Register.create({ ...req.body, price })
            const response = await Register.findByPk(data.dataValues.id, {
                include: [{ model: Client }]
            })
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async update(req, res) {
        try {
            const { id } = req.params
            const data = await Register.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Registro con el id ${id} no existe!`
                })
            }
            await data.update(req.body)
            const response = await Register.findByPk(id, {
                include: [{ model: Client }]
            })
            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async delete(req, res) {
        try {
            const { id } = req.params
            const data = await Register.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Registro con el id ${id} no existe!`
                })
            }
            await data.destroy()
            res.status(200).json({
                message: 'Registro eliminado correctamente'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async endData(req, res) {
        try {
            const { id } = req.params
            const data = await Register.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Registro con el id ${id} no existe!`
                })
            }
            await data.update({ endDate: new Date(), status: true })
            return res.status(200).json({ message: 'Finalizado correctamente' })
        } catch (error) {
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async selectFilter(req, res) {
        try {
            const paseDate = req.query.date.split('-') // Separar la cadena en partes utilizando el carácter '-'
            const date = new Date(paseDate[0], paseDate[1] - 1, paseDate[2])

            const dateInit = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                0,
                0,
                0
            )
            const dateEnd = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                23,
                59,
                59
            )

            const response = await Register.findAll({
                include: [
                    { model: Client },
                    {
                        model: User,
                        attributes: {
                            exclude: [
                                'createdAt',
                                'updatedAt',
                                'password',
                                'recoveryToken'
                            ]
                        }
                    }
                ],
                where: {
                    date: {
                        [Op.between]: [dateInit, dateEnd]
                    }
                },
                limit: 100,
                order: [['date', 'DESC']]
            })
            res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async selectHistory(req, res) {
        try {
            const { id } = req.query
            const response = await Register.findAll({
                include: [
                    { model: Client },
                    {
                        model: User,
                        attributes: {
                            exclude: [
                                'createdAt',
                                'updatedAt',
                                'password',
                                'recoveryToken'
                            ]
                        }
                    }
                ],
                where: {
                    idClients: id
                },
                order: [['date', 'DESC']]
            })
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    }
}

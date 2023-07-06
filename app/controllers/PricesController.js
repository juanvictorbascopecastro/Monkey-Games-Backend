const { Price } = require('../models/index')

module.exports = {
    async select(req, res) {
        try {
            const response = await Price.findAll({
                order: [['minutes', 'ASC']],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    // crear item
    async create(req, res) {
        try {
            const { minutes } = req.body
            const data = await Price.findOne({ where: { minutes } })
            if (data)
                return res.status(400).json({
                    message: `Ya existe un precio para el minuto ${minutes}`
                })
            const response = await Price.create(req.body)
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },

    // actualizar item
    async update(req, res) {
        try {
            const { id } = req.params
            const { minutes } = req.body
            const data = await Price.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Price with id ${id} not found!`
                })
            }

            const exits = await Price.findOne({ where: { minutes } })
            console.log(exits.dataValues)
            if (exits)
                if (parseInt(id) !== exits.dataValues.id)
                    return res.status(400).json({
                        message: `Ya existe un precio para el minuto ${minutes}`
                    })

            const response = await data.update(req.body)
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },

    // eliminar item
    async delete(req, res) {
        try {
            const { id } = req.params

            const data = await Price.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Price with id ${id} not found!`
                })
            }

            await data.destroy()

            res.status(200).json({
                message: 'Price Deleted'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },

    async getById(req, res) {
        const { id } = req.params

        const response = await Price.findByPk(id)
        if (!response) {
            return res.status(404).json({
                message: `Price with id ${id} not found!`
            })
        }
        return res.status(200).json(response)
    }
}

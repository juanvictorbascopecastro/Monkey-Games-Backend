const { Client } = require('../models/index')
const attributes = [
    'id',
    'name',
    'lastName',
    'email',
    'phone',
    'photo',
    'ci',
    'code',
    'active',
    'createdAt'
]
module.exports = {
    async select(req, res) {
        try {
            const response = await Client.findAll({
                order: [['name', 'ASC']],
                attributes
            })
            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error con el servidor!'
            })
        }
    },
    // crear item
    async create(req, res) {
        try {
            if (req.body.ci) req.body.code = req.body.ci
            else {
                // generar un codigo unico para el cliente
                const code = Date.now().toString(30)
                req.body.code = `${req.body.name.toLowerCase()}-${code}`
                let value = null
                do {
                    value = await Client.findOne({
                        where: {
                            code: req.body.code
                        }
                    })
                } while (value)
            }

            const data = await Client.create(req.body)
            res.status(200).json({
                data,
                message: 'Cliente creado correctamente'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error con el servidor!'
            })
        }
    },

    // actualizar item
    async update(req, res) {
        try {
            const { id } = req.params
            const data = await Client.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Cliente con el id ${id} no existe!`
                })
            }
            await data.update(req.body)

            const response = await Client.findByPk(id)

            res.status(200).json({
                data: response,
                message: 'Cliente creado correctamente'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error con el servidor!'
            })
        }
    },

    // eliminar item
    async delete(req, res) {
        try {
            const { id } = req.params

            const data = await Client.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Cliente con el id ${id} no existe!`
                })
            }

            await data.destroy()

            res.status(200).json({
                message: 'Cliente eliminado correctamente'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error con el servidor!'
            })
        }
    },

    async getById(req, res) {
        const { id } = req.params

        const response = await Client.findByPk(id, { attributes })
        if (!response) {
            return res.status(404).json({
                message: `Cliente con el id ${id} no existe!`
            })
        }
        return res.status(200).json(response)
    }
}

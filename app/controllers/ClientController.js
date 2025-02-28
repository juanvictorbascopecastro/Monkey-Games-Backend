const { Op } = require('sequelize')
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
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    // crear item
    async create(req, res) {
        try {
            if (req.body.phone) {
                req.body.code = req.body.phone
                // verificamos si ya existe
                const existe = await Client.findOne({
                    where: {
                        code: req.body.code
                    }
                })
                if (existe) req.body.code == null
            }
            if (!req.body.code && req.body.ci) req.body.code = req.body.ci
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
            res.status(200).json(data)
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
                message: 'Error en la solicitud con el servidor!'
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
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    // obtener por id
    async getById(req, res) {
        const { id } = req.params

        const response = await Client.findByPk(id, { attributes })
        if (!response) {
            return res.status(404).json({
                message: `Cliente con el id ${id} no existe!`
            })
        }
        return res.status(200).json(response)
    },
    // buscar por caracter
    async search(req, res) {
        try {
            const { text } = req.query
            const response = await Client.findAll({
                order: [['name', 'ASC']],
                where: {
                    [Op.or]: [
                        { code: { [Op.like]: `%${text}%` } },
                        { name: { [Op.like]: `%${text}%` } },
                        { lastName: { [Op.like]: `%${text}%` } }
                    ]
                },
                limit: 20
            })
            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    // obtener por codigo de cliente
    async getByCode(req, res) {
        const { code } = req.params

        const response = await Client.findOne(
            { where: { code } },
            { attributes }
        )
        if (!response) {
            return res.status(404).json({
                message: `Cliente con el codigo ${code} no existe!`
            })
        }
        return res.status(200).json(response)
    }
}

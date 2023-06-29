const { Category } = require('../models/index')

module.exports = {
    async select(req, res) {
        try {
            const response = await Category.findAll({
                order: [['name', 'ASC']],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                }
            })
            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error in the request'
            })
        }
    },
    // crear item
    async create(req, res) {
        try {
            const data = await Category.create(req.body)
            res.status(200).json({
                data,
                message: 'Category create'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error in the request'
            })
        }
    },

    // actualizar item
    async update(req, res) {
        try {
            const { id } = req.params
            const data = await Category.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Category with id ${id} not found!`
                })
            }

            await data.update(req.body)

            res.status(200).json({
                data,
                message: 'Category updated'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error in the request'
            })
        }
    },

    // eliminar item
    async delete(req, res) {
        try {
            const { id } = req.params

            const data = await Category.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Category with id ${id} not found!`
                })
            }

            await data.destroy()

            res.status(200).json({
                message: 'Category Deleted'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error in the request'
            })
        }
    },

    async getById(req, res) {
        const { id } = req.params

        const response = await Category.findByPk(id)
        if (!response) {
            return res.status(404).json({
                message: `Category with id ${id} not found!`
            })
        }
        return res.status(200).json(response)
    }
}

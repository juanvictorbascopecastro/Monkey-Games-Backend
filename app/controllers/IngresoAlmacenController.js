const { Op } = require('sequelize')
const { IngresoAlmacen, Product, Caja, User } = require('../models/index')

module.exports = {
    async select(req, res) {
        try {
            const response = await IngresoAlmacen.findAll({
                order: [['date', 'DESC']],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: Product
                    },
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
                    },
                    {
                        model: Caja
                    }
                ],
                limit: 100
            })
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
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
            const response = await IngresoAlmacen.findAll({
                order: [['date', 'DESC']],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: Product
                    },
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
                    },
                    {
                        model: Caja
                    }
                ],
                where: {
                    date: {
                        [Op.between]: [dateInit, dateEnd]
                    }
                }
            })
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    // crear item
    async create(req, res) {
        try {
            const product = await Product.findByPk(req.body.idProducts)
            if (!product)
                return res.status(400).json({
                    message: `Producto con el id ${req.body.idProducts} no existe!`
                })
            await IngresoAlmacen.create(req.body)
            const response = await product.update({
                stock: product.dataValues.stock + parseInt(req.body.amount)
            })

            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },

    // eliminar item
    async delete(req, res) {
        try {
            const { id } = req.params

            const data = await IngresoAlmacen.findByPk(id)
            if (!data)
                return res.status(404).json({
                    message: `Ingreso a almacen con el id ${id} no existe!`
                })

            // volvemos a su stock anterior al producto
            const product = await Product.findByPk(data.dataValues.idProducts)
            if (!product)
                return res.status(400).json({
                    message: `Producto con el id ${req.body.idProducts} no existe!`
                })
            const newStock =
                product.dataValues.stock - parseInt(data.dataValues.amount)
            if (newStock < 0)
                return res.status(400).json({
                    message: `No es posible cancelar estes registro por que el stock quedaria en negativo para el producto ${product.dataValues.name}!`
                })
            const response = await product.update({
                stock: newStock
            })
            await data.destroy()
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },

    async getById(req, res) {
        const { id } = req.params
        const response = await IngresoAlmacen.findByPk(id)
        if (!response) {
            return res.status(404).json({
                message: `IngresoAlmacen with id ${id} not found!`
            })
        }
        return res.status(200).json(response)
    }
}

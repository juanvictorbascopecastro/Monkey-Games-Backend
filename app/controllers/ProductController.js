const { Product, Category } = require('../models/index')
const { uploadFile, removeFile } = require('../helpers/file/index.')
const { nameFolderProduct } = require('./../../config/global')
const sequelize = require('sequelize')
const { Op } = require('sequelize')

module.exports = {
    async select(req, res) {
        try {
            const option = {
                order: [['name', 'ASC']],
                attributes: [
                    'id',
                    'createdAt',
                    'name',
                    'description',
                    'status',
                    'price',
                    'idCategories',
                    'image',
                    'stock'
                ],
                include: [
                    {
                        model: Category,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }
                ]
            }
            const response = await Product.findAll(option)
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async filterCategoryProduct(req, res) {
        try {
            const option = {
                order: [['name', 'ASC']],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: Product,
                        attributes: [
                            'id',
                            'createdAt',
                            'name',
                            'description',
                            'status',
                            'price',
                            'image',
                            'stock'
                        ]
                    }
                ]
            }
            const response = await Category.findAll(option)
            return res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!!'
            })
        }
    },
    // crear item
    async create(req, res) {
        try {
            if (
                req.files &&
                Object.keys(req.files).length >= 0 &&
                req.files.image
            ) {
                // almacena en archivos locales
                const { pathFile } = await uploadFile(
                    req.files.image,
                    nameFolderProduct
                )
                req.body.image = pathFile
            } else delete req.body.image

            await Product.create(req.body)

            res.status(201).json({
                message: 'Product create'
            })
        } catch (error) {
            let message = ''
            if (typeof error === 'string' || error instanceof String)
                message = error
            else message = 'Error en la solicitud con el servidor!'

            res.status(500).json({
                message
            })
        }
    },
    // actualizar item
    async update(req, res) {
        try {
            const { id } = req.params

            const data = await Product.findByPk(id, {
                include: [
                    {
                        model: Category,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }
                ]
            })

            if (!data) {
                return res.status(404).json({
                    message: `Producto con el id ${id} no existe!`
                })
            }
            if (
                req.files &&
                Object.keys(req.files).length >= 0 &&
                req.files.image
            ) {
                // quitar el archivo anterior
                if (data.dataValues.image)
                    await removeFile(data.dataValues.image)

                // almacena en archivos locales
                const { pathFile } = await uploadFile(
                    req.files.image,
                    nameFolderProduct
                )
                req.body.image = pathFile
            } else {
                delete req.body.image
            }
            await data.update(req.body)

            res.status(200).json({
                data,
                message: 'Product updated'
            })
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

            const data = await Product.findByPk(id)
            if (data == null) {
                return res.status(404).json({
                    message: `Producto con el id ${id} no existe!`
                })
            }
            // const numVentas = await VentaProduct.count({
            //     where: {
            //         idProducts: id
            //     }
            // })
            // if (numVentas > 0) {
            //     return res.status(400).json({
            //         message: `No es posible eliminar el producto, esta registrada en ${numVentas} ventas!`
            //     })
            // }
            // quitar el archivo anterior
            if (data.dataValues.image) await removeFile(data.dataValues.image)

            await data.destroy()

            res.status(200).json({
                message: 'Product Deleted'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async getById(req, res) {
        const { id } = req.params
        const response = await Product.findByPk(id, {
            include: [
                {
                    model: Category,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            ]
        })
        if (!response) {
            return res.status(404).json({
                message: `Producto con el id ${id} no existe!`
            })
        }
        return res.status(200).json(response)
    }
}

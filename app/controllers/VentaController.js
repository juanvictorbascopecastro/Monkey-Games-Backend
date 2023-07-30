const { valueAdmin } = require('../../config/global')
const {
    CONFIG_VENTA,
    up
} = require('../database/seeders/20230716170025-configParams')
const {
    checkStock,
    updateStock,
    checkStockUpdate
} = require('../helpers/product-stock')
const { getIdApertura } = require('../helpers/query-db')
const { createArrayObject } = require('./../helpers/db-arrays')
const {
    Venta,
    VentaProduct,
    Product,
    ConfigParam,
    Client,
    User,
    Caja
} = require('./../models/index')
const { Op } = require('sequelize')
const options = {
    order: [['date', 'DESC']],
    attributes: {
        exclude: ['createdAt']
    },
    include: [
        {
            model: VentaProduct,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [
                {
                    model: Product,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    }
                }
            ]
        },
        {
            model: Client,
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        },
        {
            model: User,
            attributes: {
                exclude: ['createdAt', 'updatedAt', 'password', 'recoveryToken']
            }
        }
    ],
    where: {
        isCanceled: false
    }
}

module.exports = {
    async select(req, res) {
        try {
            let { start, end } = req.query
            let query = {}
            if (start && end) {
                start = new Date(start)
                end = new Date(end)

                query = {
                    where: {
                        createdAt: {
                            [Op.between]: [start, end]
                        }
                    },
                    ...options
                }
            } else {
                query = { limit: 100, ...options }
            }
            const response = await Venta.findAll(query)

            return res.status(200).json(response)
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
            const response = await Venta.findAll({
                ...options,
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
    // crear item
    async create(req, res) {
        try {
            const {
                idClients,
                date,
                discount,
                total,
                idUsers,
                products,
                details,
                importe,
                idCajas
            } = req.body

            const dataDb = {
                idClients,
                date,
                details,
                total,
                idUsers,
                discount,
                importe
            }
            if (!Array.isArray(products))
                return res
                    .status(400)
                    .json({ message: '¡El parámetro "products" no es válido!' })

            if (products.length <= 0)
                return res
                    .status(400)
                    .json({ message: '¡No hay productos agregado a la venta!' })

            // consultamos la configuracion
            const config = await ConfigParam.findOne({
                where: { name: CONFIG_VENTA }
            })
            const datas = JSON.parse(config.dataValues.datas)
            if (datas.activeStockVenta) {
                // verificamos el stock del producto
                const { errors, productModel } = await checkStock(products)
                if (errors.length > 0) return res.status(400).json(errors)
                // actualizar stock
                await updateStock(productModel, products)
            }
            // obtenemos el id de la apertura de caja
            if (idCajas) {
                // obtenemos el id de la apertura
                const idApertura = await getIdApertura(idCajas)
                if (idApertura) dataDb.idAperturaCajas = idApertura
                dataDb.idCajas = idCajas
            }

            const data = await Venta.create(dataDb)
            // registramos los productos de esa venta
            await createArrayObject(
                products,
                VentaProduct,
                data.dataValues.id,
                'idVentas'
            )

            const response = await Venta.findByPk(data.dataValues.id, options)
            res.status(201).json(response)
        } catch (error) {
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async update(req, res) {
        try {
            const {
                idClients,
                date,
                discount,
                total,
                idUsers,
                products,
                details,
                importe,
                idCajas
            } = req.body

            const dataDb = {
                idClients,
                date,
                details,
                total,
                idUsers,
                discount,
                importe
            }
            const { id } = req.params

            const venta = await Venta.findByPk(id, options)
            if (!venta)
                return res.status(404).json({
                    message: `Venta con el id ${id} no existe!`
                })

            if (!Array.isArray(products))
                return res
                    .status(400)
                    .json({ message: '¡El parámetro "products" no es válido!' })

            if (products.length <= 0)
                return res
                    .status(400)
                    .json({ message: '¡No hay productos agregado a la venta!' })
            // verificamos si se puede editar
            if (req.currentUser.rol !== valueAdmin) {
                const caja = await Caja.findByPk(venta.dataValues.idCajas)
                if (!caja.dataValues.idOpened) {
                    return res.status(400).json({
                        message: `Usted no puede actualizar esta venta!`
                    })
                }
                if (
                    venta.dataValues.idAperturaCajas !==
                    caja.dataValues.idOpened
                ) {
                    return res.status(400).json({
                        message: `Usted no puede modificar esta venta!`
                    })
                }
            }
            // consultamos la configuracion
            const config = await ConfigParam.findOne({
                where: { name: CONFIG_VENTA }
            })
            const configVenta = JSON.parse(config.dataValues.datas)
            if (configVenta.activeStockVenta) {
                // verificamos el stock del producto
                const { errors, productModel } = await checkStockUpdate(
                    products,
                    venta.dataValues.VentaProducts
                )
                if (errors.length > 0) return res.status(400).json(errors)
                // // actualizar stock
                await updateStock(productModel, products)
            }
            // // obtenemos el id de la apertura de caja
            if (idCajas) {
                // obtenemos el id de la apertura
                const idApertura = await getIdApertura(idCajas)
                if (idApertura) dataDb.idAperturaCajas = idApertura
                dataDb.idCajas = idCajas
            }

            await Venta.update(dataDb, { where: { id } })
            // // registramos los productos de esa venta
            await createArrayObject(products, VentaProduct, id, 'idVentas')

            const response = await Venta.findByPk(id, options)
            res.status(201).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    // async update(req, res) {
    //     try {
    //         const { id } = req.params
    //         const data = await Venta.findByPk(id)

    //         if (!data) {
    //             return res.status(404).json({
    //                 message: `Venta with id ${id} not found!`
    //             })
    //         }
    //         const {
    //             idClients,
    //             date,
    //             isPaid,
    //             discount,
    //             total,
    //             idOccupies,
    //             typeDoc,
    //             VentaProducts,
    //             details
    //         } = req.body

    //         await VentaProduct.destroy({
    //             where: {
    //                 idVentas: id
    //             }
    //         })

    //         await createArrayObject(
    //             VentaProducts,
    //             VentaProduct,
    //             data.dataValues.id,
    //             'idVentas'
    //         )

    //         await data.update({
    //             idClients,
    //             date,
    //             isPaid,
    //             discount,
    //             total,
    //             idOccupies,
    //             typeDoc,
    //             details
    //         })

    //         res.status(200).json({
    //             message: 'Venta updated'
    //         })
    //     } catch (error) {
    //         console.log(error)
    //         res.status(500).json({
    //             message: 'Error in the request!'
    //         })
    //     }
    // },
    // eliminar item
    async delete(req, res) {
        try {
            const { id } = req.params

            const data = await Venta.findByPk(id)
            if (!data)
                return res.status(404).json({
                    message: `Venta con el id ${id} no existe!`
                })
            if (req.currentUser.rol === valueAdmin) {
                await data.update({ isCanceled: true })
                return res.status(200).json({
                    message: 'Venta Canceled'
                })
            }
            const caja = await Caja.findByPk(data.dataValues.idCajas)

            if (!caja.dataValues.idOpened) {
                return res.status(400).json({
                    message: `Usted no puede cancelar esta venta!`
                })
            }
            if (data.dataValues.idAperturaCajas === caja.dataValues.idOpened) {
                // verificamos que la apertura de caja sea la actual
                await data.update({ isCanceled: true })
                return res.status(200).json({
                    message: 'Venta Canceled'
                })
            } else {
                return res.status(400).json({
                    message: `Usted no puede cancelar esta venta!`
                })
            }
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async getById(req, res) {
        try {
            const { id } = req.params
            const response = await Venta.findByPk(id, options)

            if (!response)
                return res.status(404).json({
                    message: `Venta con el id ${id} no existe!`
                })

            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    // ventas canceladas
    async getCanceled(req, res) {
        try {
            let { start, end } = req.query
            let query = {}
            if (start && end) {
                start = new Date(start)
                end = new Date(end)

                query = {
                    where: {
                        createdAt: {
                            [Op.between]: [start, end]
                        }
                    },
                    ...options
                }
            } else {
                query = {
                    limit: 100,
                    ...options,
                    where: {
                        isCanceled: true
                    }
                }
            }
            const response = await Venta.findAll(query)
            return res.status(200).json(response)
        } catch (error) {
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    }
}

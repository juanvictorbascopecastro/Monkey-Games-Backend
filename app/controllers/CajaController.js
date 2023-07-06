const { Caja, AperturaCaja, CierreCaja } = require('../models/index')

module.exports = {
    async select(req, res) {
        try {
            const response = await Caja.findAll({
                order: [['name', 'ASC']],
                attributes: {
                    exclude: ['createdAt', 'updatedAt']
                },
                include: [
                    {
                        model: AperturaCaja,
                        // required: false,
                        include: [
                            {
                                model: CierreCaja,
                                required: false,
                                where: {
                                    idAperturaCajas: null
                                }
                            }
                        ]
                    }
                ]
            })
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    // crear item
    async create(req, res) {
        try {
            const data = await Caja.create(req.body)
            res.status(200).json({
                data,
                message: 'Caja create'
            })
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
            const data = await Caja.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Caja con el id ${id} no existe!`
                })
            }
            await data.update(req.body)
            res.status(200).json({
                data,
                message: 'Caja updated'
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
            const data = await Caja.findByPk(id)
            if (!data) {
                return res.status(404).json({
                    message: `Caja con el id ${id} no existe!`
                })
            }
            await data.destroy()
            res.status(200).json({
                message: 'Caja eliminado'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },

    async getById(req, res) {
        const { id } = req.params
        const response = await Caja.findByPk(id)
        if (!response) {
            return res.status(404).json({
                message: `Caja con el id ${id} no existe!`
            })
        }
        return res.status(200).json(response)
    }
}

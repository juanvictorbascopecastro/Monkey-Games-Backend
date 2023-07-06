const { Op } = require('sequelize')
const {
    AperturaCaja,
    CierreCaja,
    User,
    Client,
    Caja,
    Register,
    sequelize
} = require('../models/index')

module.exports = {
    // crear item
    async aperturar(req, res) {
        try {
            const caja = await Caja.findByPk(req.body.idCajas)
            if (!caja)
                return res.status(404).json({
                    message: `Caja con el id ${id} no existe!`
                })
            if (caja.dataValues.idOpened)
                return res.status(400).json({
                    message: `Ya se hizo una apertura a la ${caja.dataValues.name}!`
                })
            const response = await AperturaCaja.create({
                date: req.body.date,
                startAmount: req.body.amount,
                comment: req.body.comment,
                idUsers: req.body.idUsers,
                idCajas: req.body.idCajas
            })
            await caja.update({ idOpened: response.dataValues.id })
            // const data = await Caja.create(req.body)
            res.status(200).json({
                data: response,
                message: 'Aperturado correctamente'
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async historico(req, res) {
        try {
            const response = await AperturaCaja.findAll({
                include: [
                    {
                        model: CierreCaja,
                        required: false
                    },
                    {
                        model: User
                    },
                    {
                        model: Caja
                    }
                ],
                limit: 100
            })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async getById(req, res) {
        try {
            const response = await AperturaCaja.findByPk(req.params.id, {
                include: [
                    {
                        model: CierreCaja,
                        required: false
                    },
                    {
                        model: User
                    },
                    {
                        model: Caja
                    }
                ]
            })
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async movement(req, res) {
        try {
            const { id } = req.params
            const apertura = await AperturaCaja.findOne({
                where: {
                    idCajas: id
                },
                include: [
                    {
                        model: CierreCaja,
                        required: false,
                        where: {
                            id: null
                        }
                    }
                ]
                // order: [['date', 'DESC']]
            })
            console.log(apertura.dataValues)
            const date = new Date()
            const dateInit = apertura.dataValues.date
            const dateEnd = new Date(
                date.getFullYear(),
                date.getMonth(),
                date.getDate(),
                23,
                59,
                59
            )
            console.log(dateInit)
            console.log(dateEnd)
            const response = await Register.findAll({
                include: [{ model: Client }, { model: User }],
                attributes: [
                    'createdAt',
                    'date',
                    'description',
                    'endDate',
                    'id',
                    'idCajas',
                    'idClients',
                    'idUsers',
                    'minutes',
                    'price',
                    'status',
                    [sequelize.literal("'Ingreso a juegos'"), 'movimiento']
                ],
                where: {
                    date: {
                        [Op.between]: [dateInit, dateEnd]
                    }
                },
                limit: 100,
                order: [['date', 'DESC']]
            })
            const totalRegister = await Register.findOne({
                attributes: [
                    [sequelize.fn('sum', sequelize.col('price')), 'total']
                ],
                where: {
                    date: {
                        [Op.between]: [dateInit, dateEnd]
                    }
                }
            })
            res.status(200).json({
                list: response,
                total: totalRegister.dataValues.total
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    }
}

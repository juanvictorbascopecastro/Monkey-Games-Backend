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
const { response } = require('express')

module.exports = {
    // crear item
    async aperturar(req, res) {
        try {
            const caja = await Caja.findByPk(req.body.idCajas)
            if (!caja)
                return res.status(404).json({
                    message: `¡Caja con el id ${id} no existe!`
                })
            if (caja.dataValues.idOpened)
                return res.status(400).json({
                    message: `¡La apertura de la ${caja.dataValues.name} ya fue efectuada !`
                })
            const response = await AperturaCaja.create({
                date: req.body.date,
                startAmount: req.body.amount,
                comment: req.body.comment,
                idUsers: req.body.idUsers,
                idCajas: req.body.idCajas
            })
            await caja.update({ idOpened: response.dataValues.id })
            res.status(200).json(response)
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async cerrar(req, res) {
        try {
            const caja = await Caja.findByPk(req.body.idCajas)
            if (!caja)
                return res.status(404).json({
                    message: `¡Caja con el id ${id} no existe!`
                })
            if (!caja.dataValues.idOpened)
                return res.status(400).json({
                    message: `¡No se realizó la apertura de la ${caja.dataValues.name}!`
                })
            const apertura = await AperturaCaja.findByPk(
                caja.dataValues.idOpened,
                {
                    include: [
                        {
                            model: CierreCaja,
                            required: false
                        }
                    ]
                }
            )
            if (apertura.dataValues.CierreCaja) {
                // await caja.update({ idOpened: null })
                return res.status(400).json({
                    message: `¡La ${caja.dataValues.name} fue cerrada anteriormente!`
                })
            }

            const response = await CierreCaja.create({
                date: req.body.date,
                endAmount: req.body.endAmount,
                expected: req.body.expected,
                comment: req.body.comment,
                idUsers: req.body.idUsers,
                idAperturaCajas: apertura.dataValues.id
            })
            await caja.update({ idOpened: null })
            return res.status(200).json(response)
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
                order: [['date', 'DESC']],
                include: [
                    {
                        model: CierreCaja,
                        required: false
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
            res.status(200).json(response)
        } catch (error) {
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    },
    async getMovements(req, res) {
        try {
            const { id } = req.params
            let { start, end, idAperturaCajas } = req.query
            const caja = await Caja.findByPk(id)
            if (!caja)
                return res.status(404).json({
                    message: `¡Caja con el id ${id} no existe!`
                })
            if (!start) {
                if (!caja.dataValues.idOpened && !idAperturaCajas) {
                    return res.status(404).json({
                        message: 'La caja no se encuentra aperturada'
                    })
                }
                const apertura = await AperturaCaja.findByPk(
                    idAperturaCajas
                        ? idAperturaCajas
                        : caja.dataValues.idOpened,
                    {
                        attributes: [
                            'id',
                            [
                                sequelize.cast(
                                    sequelize.col('"AperturaCaja"."date"'),
                                    'VARCHAR'
                                ),
                                'date'
                            ],
                            // 'date',
                            'startAmount',
                            'comment',
                            'idUsers',
                            'idCajas'
                        ],
                        include: [
                            {
                                model: CierreCaja,
                                attributes: [
                                    'createdAt',
                                    'id',
                                    'idUsers',
                                    'comment',
                                    'expected',
                                    'endAmount',
                                    'id',
                                    [
                                        sequelize.cast(
                                            sequelize.col(
                                                '"CierreCaja"."date"'
                                            ),
                                            'VARCHAR'
                                        ),
                                        'date'
                                    ]
                                ]
                            }
                        ]
                    }
                )
                start = apertura.dataValues.date // getFormatDb(new Date(apertura.dataValues.date))
                if (apertura.dataValues.CierreCaja)
                    end = apertura.dataValues.CierreCaja.dataValues.date
            }
            let valueEnd = null
            if (end) valueEnd = ` <= '${end}'`

            const [list] = await sequelize.query(`
            SELECT "v"."id", "v"."total", "v"."date", "v"."createdAt", "v"."details", 
            'Venta' AS "movement", "v"."idUsers", CONCAT ("u"."name", "u"."lastName") AS user, 'Ingreso' AS "flujo"
            FROM "Ventas" AS "v"
            LEFT JOIN "Users" AS "u" ON "u"."id" = "v"."idUsers"
            WHERE "v"."idCajas" = ${id} AND "v"."isCanceled" = false AND "v"."date" >= '${start}' ${
                valueEnd ? 'AND "v"."date" ' + valueEnd : ''
            }
            UNION
            SELECT "r"."id", "r"."price" AS total, "r"."date", "r"."createdAt", "r"."description" AS "details", 
            'Sala de juegos' AS movement, "r"."idUsers", CONCAT ("u"."name", "u"."lastName") AS user, 'Ingreso' AS "flujo"
            FROM "Registers" AS "r" LEFT JOIN "Users" AS "u" ON "u"."id" = "r"."idUsers"
                        WHERE "r"."idCajas" = ${id} AND "r"."date" >= '${start}' ${
                valueEnd ? 'AND "r"."date" ' + valueEnd : ''
            }
            UNION
            SELECT "ia"."id", ("ia"."price" * -1) AS "total", "ia"."date", "ia"."createdAt", "ia"."comment" AS "details", 
            'Ingreso de Stock' AS "movement", "ia"."idUsers", CONCAT ("u"."name", "u"."lastName") AS user, 'Egreso' AS "flujo"
            FROM "IngresoAlmacens" AS "ia" LEFT JOIN "Users" AS "u" ON "u"."id" = "ia"."idUsers"
            WHERE "ia"."idCajas" = ${id} AND "ia"."date" >= '${start}' ${
                valueEnd ? 'AND "ia"."date" ' + valueEnd : ''
            }
            ORDER BY "date" DESC
            `)

            const [dataTotal] = await sequelize.query(`
            SELECT SUM("sub"."total") AS "total"
            FROM (
                SELECT SUM("v"."total") AS "total"
                FROM "Ventas" AS "v"
                WHERE "v"."idCajas" = ${id} AND "v"."isCanceled" = false AND "v"."date" >= '${start}' ${
                valueEnd ? 'AND "date" ' + valueEnd : ''
            }
                GROUP BY "v"."idCajas"
                UNION
                SELECT SUM("r"."price") AS "total"
                FROM "Registers" AS "r" 
                WHERE "r"."idCajas" = ${id} AND "r"."date" >= '${start}' ${
                valueEnd ? 'AND "r"."date" ' + valueEnd : ''
            }
                GROUP BY "r"."idCajas"
                UNION
                SELECT SUM("price") * -1 AS "total"
                FROM "IngresoAlmacens"
                WHERE "idCajas" = ${id} AND "date" >= '${start}' ${
                valueEnd ? 'AND "date" ' + valueEnd : ''
            }
                GROUP BY "idCajas"
            ) AS "sub"`)
            res.status(200).json({
                list,
                total: dataTotal[0].total
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    }
}

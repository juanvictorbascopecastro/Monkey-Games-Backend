const {
    CONFIG_CAJA
} = require('../database/seeders/20230716170025-configParams')
const { ConfigParam, Caja } = require('../models/index')

module.exports = {
    async checkCajaParams(req, res, next) {
        const response = await ConfigParam.findOne({
            where: { name: CONFIG_CAJA }
        })
        if (!response) {
            next()
            return
        }
        const datas = JSON.parse(response.dataValues.datas)
        if (datas.activeApertura === undefined) {
            next()
            return
        }
        const { idCajas } = req.body
        // si no se envio el id caja
        if (!idCajas)
            return res.status(400).json({
                message:
                    '¡La apertura de la caja es necesaria para llevar a cabo el registro!'
            })

        const caja = await Caja.findByPk(idCajas)
        if (!caja)
            // si no existe la caja
            return res.status(404).json({
                message: `¡La caja con el id ${idCajas} mo existe!`
            })
        //verificamos si hay una apertura de caja
        if (!caja.dataValues.idOpened)
            return res.status(400).json({
                message:
                    '¡La apertura de la caja es necesaria para llevar a cabo el registro!'
            })
        next()
    }
}

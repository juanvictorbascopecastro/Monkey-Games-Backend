const { ConfigParam } = require('../models/index')

module.exports = {
    async select(req, res) {
        try {
            const response = await ConfigParam.findAll()
            return res.status(200).json(JSON.parse(response.dataValues))
        } catch (error) {
            res.status(500).json({
                message: 'Error in the request'
            })
        }
    },
    // crear item
    async create(req, res) {
        try {
            const { datas, name } = req.body
            const data = await ConfigParam.findOne({
                where: {
                    name
                }
            })
            if (data) await data.update({ datas: JSON.stringify(datas), name })
            else
                await ConfigParam.create({
                    datas: JSON.stringify(datas),
                    name
                })
            const response = await ConfigParam.findAll()
            return res.status(200).json(response)
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                message: 'Error en la solicitud con el servidor!'
            })
        }
    }
}

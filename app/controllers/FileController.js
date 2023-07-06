const { getFile } = require('../helpers/file/same-project')
const models = require('../models/index')
module.exports = {
    async getSrcImage(req, res) {
        try {
            const { id, nameModel, nameFileDb } = req.params
            const response = await models[nameModel].findByPk(id)
            if (!response) {
                return res.status(404).json({
                    message: `Producto con el ${id} no existe!`
                })
            }
            const pathImage = await getFile(response.dataValues.image)
            res.sendFile(pathImage)
        } catch (error) {
            console.log(error)
            let message = ''
            if (typeof error === 'string' || error instanceof String)
                message = error
            else message = 'Error en la solicitud con el servidor!'

            res.status(500).json({
                message
            })
        }
    }
}

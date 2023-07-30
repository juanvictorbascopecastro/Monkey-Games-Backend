const { Caja } = require('../models/index')

module.exports = {
    async getIdApertura(idCajas) {
        const caja = await Caja.findByPk(idCajas)
        return caja.dataValues.idOpened || null
    }
}

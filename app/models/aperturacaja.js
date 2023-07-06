'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class AperturaCaja extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {
                foreignKey: 'idUsers'
            })
            this.belongsTo(models.Caja, {
                foreignKey: 'idCajas'
            })
            this.hasOne(models.CierreCaja, {
                foreignKey: 'idAperturaCajas'
            })
        }
    }
    AperturaCaja.init(
        {
            date: DataTypes.DATE,
            startAmount: DataTypes.FLOAT,
            comment: DataTypes.STRING,
            idUsers: DataTypes.INTEGER,
            idCajas: DataTypes.INTEGER,
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'AperturaCaja',
            tableName: 'AperturaCajas',
            timestamps: false
        }
    )
    return AperturaCaja
}

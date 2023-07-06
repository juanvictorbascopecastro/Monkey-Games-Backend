'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class CierreCaja extends Model {
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
            this.belongsTo(models.AperturaCaja, {
                foreignKey: 'idAperturaCajas'
            })
        }
    }
    CierreCaja.init(
        {
            date: DataTypes.DATE,
            endAmount: DataTypes.FLOAT,
            expected: DataTypes.FLOAT,
            comment: DataTypes.STRING,
            idUsers: DataTypes.INTEGER,
            idAperturaCajas: DataTypes.INTEGER,
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'CierreCaja',
            tableName: 'CierreCajas',
            timestamps: false
        }
    )
    return CierreCaja
}

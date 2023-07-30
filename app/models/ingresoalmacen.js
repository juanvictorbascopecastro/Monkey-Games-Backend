'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class IngresoAlmacen extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Product, { foreignKey: 'idProducts' })
            this.belongsTo(models.User, { foreignKey: 'idUsers' })
            this.belongsTo(models.Caja, { foreignKey: 'idCajas' })
            this.belongsTo(models.AperturaCaja, {
                foreignKey: 'idAperturaCajas'
            })
        }
    }
    IngresoAlmacen.init(
        {
            idProducts: DataTypes.INTEGER,
            idUsers: DataTypes.INTEGER,
            idCajas: DataTypes.INTEGER,
            idAperturaCajas: DataTypes.INTEGER,
            amount: DataTypes.INTEGER,
            date: DataTypes.DATE,
            price: DataTypes.FLOAT,
            comment: DataTypes.STRING,
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'IngresoAlmacen',
            tableName: 'IngresoAlmacens',
            timestamps: false
        }
    )
    return IngresoAlmacen
}

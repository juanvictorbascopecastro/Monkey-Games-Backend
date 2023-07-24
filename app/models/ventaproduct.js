'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class VentaProduct extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Venta, { foreignKey: 'idVentas' })
            this.belongsTo(models.Product, { foreignKey: 'idProducts' })
        }
    }
    VentaProduct.init(
        {
            idVentas: DataTypes.INTEGER,
            idProducts: DataTypes.INTEGER,
            amount: DataTypes.INTEGER,
            price: DataTypes.FLOAT
        },
        {
            sequelize,
            modelName: 'VentaProduct',
            tableName: 'VentaProducts',
            timestamps: false
        }
    )
    return VentaProduct
}

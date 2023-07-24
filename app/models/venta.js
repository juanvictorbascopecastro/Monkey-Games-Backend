'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Venta extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Client, { foreignKey: 'idClients' })
            this.belongsTo(models.User, { foreignKey: 'idUsers' })
            this.belongsTo(models.Caja, { foreignKey: 'idCajas' })

            this.hasMany(models.VentaProduct, { foreignKey: 'idVentas' })
        }
    }
    Venta.init(
        {
            idClients: DataTypes.INTEGER,
            idUsers: DataTypes.INTEGER,
            idCajas: DataTypes.INTEGER,
            date: DataTypes.DATE,
            discount: DataTypes.FLOAT,
            isCanceled: DataTypes.BOOLEAN,
            details: DataTypes.STRING,
            total: DataTypes.FLOAT,
            importe: DataTypes.FLOAT,
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'Venta',
            tableName: 'Ventas',
            timestamps: false
        }
    )
    return Venta
}

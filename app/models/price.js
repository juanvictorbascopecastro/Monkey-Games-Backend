'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Price extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.User, { foreignKey: 'idUsers' })
        }
    }
    Price.init(
        {
            minutes: DataTypes.INTEGER,
            price: DataTypes.FLOAT,
            idUsers: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'Price',
            tableName: 'Prices',
            timestamps: false
        }
    )
    return Price
}

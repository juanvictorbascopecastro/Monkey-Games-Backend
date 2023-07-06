'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.Category, {
                foreignKey: 'idCategories'
            })
        }
    }
    Product.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            status: DataTypes.BOOLEAN,
            price: DataTypes.FLOAT,
            idCategories: DataTypes.INTEGER,
            image: DataTypes.STRING,
            stock: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'Product',
            tableName: 'Products',
            timestamps: false
        }
    )
    return Product
}

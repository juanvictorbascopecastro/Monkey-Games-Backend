'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class ConfigParam extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    ConfigParam.init(
        {
            name: DataTypes.STRING,
            datas: DataTypes.STRING
        },
        {
            sequelize,
            modelName: 'ConfigParam',
            tableName: 'ConfigParams',
            timestamps: false
        }
    )
    return ConfigParam
}

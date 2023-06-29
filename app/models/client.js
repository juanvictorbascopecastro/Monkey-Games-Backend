'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Client extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Client.init(
        {
            name: DataTypes.STRING,
            lastName: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            ci: DataTypes.STRING,
            code: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            photo: DataTypes.STRING,
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'Client',
            tableName: 'Clients',
            timestamps: false
        }
    )
    return Client
}

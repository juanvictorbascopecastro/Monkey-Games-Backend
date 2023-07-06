'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Register extends Model {
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
            this.belongsTo(models.Client, {
                foreignKey: 'idClients'
            })
            this.belongsTo(models.Caja, {
                foreignKey: 'idCajas'
            })
        }
    }
    Register.init(
        {
            date: DataTypes.DATE,
            minutes: DataTypes.FLOAT,
            description: DataTypes.STRING,
            price: DataTypes.FLOAT,
            idUsers: DataTypes.INTEGER,
            idClients: DataTypes.INTEGER,
            endDate: DataTypes.DATE,
            status: DataTypes.BOOLEAN,
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'Register',
            tableName: 'Registers',
            timestamps: false
        }
    )
    return Register
}

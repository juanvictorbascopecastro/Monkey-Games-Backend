'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Token extends Model {
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
        }
    }
    Token.init(
        {
            // id: DataTypes.INTEGER,
            token: DataTypes.STRING,
            idUsers: DataTypes.INTEGER,
            expire: DataTypes.DATE,
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'Token',
            tableName: 'Tokens',
            timestamps: false
        }
    )
    return Token
}

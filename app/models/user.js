'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.Token, {
                foreignKey: 'idUsers'
            })
            this.hasMany(models.Caja, {
                foreignKey: 'idUsers'
            })
            this.hasMany(models.Register, {
                foreignKey: 'idUsers'
            })
            this.hasMany(models.Price, { foreignKey: 'idUsers' })
            this.hasMany(models.IngresoAlmacen, { foreignKey: 'idUsers' })
            this.hasMany(models.Venta, { foreignKey: 'idUsers' })
        }
    }
    User.init(
        {
            name: DataTypes.STRING,
            lastName: DataTypes.STRING,
            phone: DataTypes.STRING,
            email: DataTypes.STRING,
            rol: DataTypes.STRING,
            ci: DataTypes.STRING,
            password: DataTypes.STRING,
            active: DataTypes.BOOLEAN,
            photo: DataTypes.STRING,
            createdAt: DataTypes.DATE
        },
        {
            sequelize,
            modelName: 'User',
            tableName: 'Users',
            timestamps: false
        }
    )
    return User
}

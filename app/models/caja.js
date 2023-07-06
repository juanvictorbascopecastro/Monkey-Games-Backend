'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Caja extends Model {
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

            this.hasMany(models.Register, {
                foreignKey: 'idCajas'
            })

            this.hasMany(models.AperturaCaja, {
                foreignKey: 'idCajas'
            })
        }
    }
    Caja.init(
        {
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            idUsers: DataTypes.INTEGER,
            idOpened: DataTypes.INTEGER
        },
        {
            sequelize,
            modelName: 'Caja',
            tableName: 'Cajas',
            timestamps: false
        }
    )
    return Caja
}

const Sequelize = require('sequelize')
const config = require('../../config/database')

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
        host: config.host,
        dialect: config.dialect, // 'mysql'|'mariadb'|'sqlite'|'postgress'|'mssql',
        // ssl: true,
        dialectOptions: {
            // ssl: {
            //     require: true,
            //     rejectUnauthorized: false
            // },
            useUTC: true
        },
        timezone: 'America/La_Paz',
        pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000
        },
        define: {
            paranoid: true,
            timestamp: true,
            freezeTableName: true,
            underscored: false
        },
        logging: false
    }
)

module.exports = { sequelize }

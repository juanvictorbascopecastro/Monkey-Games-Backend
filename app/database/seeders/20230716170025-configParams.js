'use strict'

const CONFIG_VENTA = 'CONFIG_VENTA'
const CONFIG_STOCK = 'CONFIG_STOCK'
const CONFIG_INGRESO = 'CONFIG_INGRESO'
const CONFIG_CAJA = 'CONFIG_CAJA'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ConfigParams', [
            {
                name: CONFIG_STOCK,
                datas: '{}'
            },
            {
                name: CONFIG_VENTA,
                datas: '{}'
            },
            {
                name: CONFIG_INGRESO,
                datas: '{}'
            },
            {
                name: CONFIG_CAJA,
                datas: '{}'
            }
        ])
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('ConfigParams', null, {})
    },
    CONFIG_INGRESO,
    CONFIG_STOCK,
    CONFIG_VENTA,
    CONFIG_CAJA
}

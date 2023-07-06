'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Cajas', params)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Cajas', null, {})
    }
}

const params = [
    {
        name: 'Caja Matriz',
        description: null
    }
]

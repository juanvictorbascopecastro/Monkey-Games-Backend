'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Prices', params)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Prices', null, {})
    }
}

const params = [
    {
        minutes: 20,
        price: 15,
        idUsers: 1
    },
    {
        minutes: 60,
        price: 30,
        idUsers: 1
    }
]

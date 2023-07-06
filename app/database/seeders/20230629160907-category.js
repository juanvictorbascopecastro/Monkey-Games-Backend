'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Categories', categories)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Categories', null, {})
    }
}

const categories = [
    {
        // id: 1,
        name: 'Gaseosas',
        description: null
    },
    {
        // id: 2,
        name: 'Dulces',
        description: null
    }
]

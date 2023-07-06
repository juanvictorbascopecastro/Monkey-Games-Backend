'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Products', params)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Products', null, {})
    }
}

const params = [
    {
        name: 'Coca cola',
        description: null,
        status: true,
        price: 10,
        idCategories: 1,
        image: 'uploads/productos/f63ee302-c640-4005-9ef8-ab29718d75b3.jpg'
    },
    {
        name: 'Mirinda',
        description: null,
        status: true,
        price: 8,
        idCategories: 1,
        image: 'uploads/productos/a3edcdd4-f28e-4505-b195-5c7c6d140ebb.jpg'
    }
]

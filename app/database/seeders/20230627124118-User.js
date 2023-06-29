'use strict'
// const { User } = require('./../../models')
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', [
            {
                name: 'Victor Bascope',
                email: 'user@gmail.com',
                rol: 'admin',
                password:
                    '$2b$10$vfffrGl6TOoJP4zF0b1FwOPB4TJB6rrI9TMFm4sxjicpvTprjh8h2',
                phone: '+59172873489',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Users', null, {})
    }
}

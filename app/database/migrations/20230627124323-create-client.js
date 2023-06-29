'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Clients', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(150),
                allowNull: false
            },
            lastName: {
                type: Sequelize.STRING(150),
                allowNull: true
            },
            ci: {
                type: Sequelize.STRING(50),
                allowNull: true
            },
            phone: {
                type: Sequelize.STRING(30),
                allowNull: true
            },
            email: {
                type: Sequelize.STRING(120),
                unique: true,
                allowNull: true
            },
            code: {
                type: Sequelize.STRING(250),
                allowNull: false,
                unique: true
            },
            active: {
                type: Sequelize.BOOLEAN,
                defaultValue: true,
                allowNull: false
            },
            photo: {
                type: Sequelize.STRING(150),
                allowNull: true
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Clients')
    }
}

'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING(100)
            },
            description: {
                type: Sequelize.STRING(240),
                allowNull: true
            },
            status: {
                allowNull: false,
                type: Sequelize.BOOLEAN,
                defaultValue: true
            },
            price: {
                type: Sequelize.FLOAT
            },
            idCategories: {
                allowNull: false,
                type: Sequelize.INTEGER,
                references: {
                    model: 'Categories',
                    key: 'id'
                },
                onUpdate: 'SET NULL',
                onDelete: 'SET NULL'
            },
            image: {
                allowNull: true,
                type: Sequelize.STRING
            },
            stock: {
                allowNull: false,
                type: Sequelize.INTEGER,
                defaultValue: 0
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
        await queryInterface.dropTable('Products')
    }
}

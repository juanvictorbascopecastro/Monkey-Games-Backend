'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Registers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            minutes: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            price: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            description: {
                type: Sequelize.STRING(200),
                allowNull: true
            },
            idClients: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Clients',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            idCajas: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'Cajas',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            idUsers: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Users',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            status: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
                defaultValue: false
            },
            endDate: {
                allowNull: true,
                type: Sequelize.DATE
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
        await queryInterface.dropTable('Registers')
    }
}

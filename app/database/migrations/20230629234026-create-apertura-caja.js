'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('AperturaCajas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            startAmount: {
                type: Sequelize.FLOAT,
                defaultValue: 0,
                allowNull: false
            },
            comment: {
                type: Sequelize.STRING,
                allowNull: true
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
            idCajas: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'Cajas',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
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
        await queryInterface.dropTable('AperturaCajas')
    }
}

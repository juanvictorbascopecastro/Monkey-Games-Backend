'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Ventas', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
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
            idAperturaCajas: {
                type: Sequelize.INTEGER,
                allowNull: true,
                references: {
                    model: 'AperturaCajas',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'SET NULL'
            },
            date: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('now')
            },
            total: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            importe: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            discount: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            isCanceled: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: true
            },
            details: {
                type: Sequelize.STRING(200),
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
        await queryInterface.dropTable('Ventas')
    }
}

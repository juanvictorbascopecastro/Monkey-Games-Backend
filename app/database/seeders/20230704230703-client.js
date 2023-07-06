'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Clients', params)
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('Clients', null, {})
    }
}

const params = [
    {
        name: 'Olivia',
        lastName: 'Herrera',
        ci: '9023838',
        phone: '+59172938399',
        email: 'olivia@gmail.com',
        code: '9023838'
    },
    {
        name: 'Oscar',
        lastName: 'Fernandez Soliz',
        ci: '9020388',
        phone: '+59172938388',
        email: 'oscar@gmail.com',
        code: '9020388'
    },
    {
        name: 'Monica',
        lastName: 'De la Cruz',
        ci: '9120039',
        phone: '+59172938249',
        email: 'monica@gmail.com',
        code: '9120039'
    },
    {
        name: 'Pablo',
        lastName: 'Carrillo',
        ci: '9020234',
        phone: '+59172938989',
        email: 'pablo@gmail.com',
        code: '9020234'
    },
    {
        name: 'Jose',
        lastName: 'Martinez',
        ci: '9023122',
        phone: '+59172938249',
        email: 'jose@gmail.com',
        code: '9023122'
    },
    {
        name: 'Marco Antonio',
        lastName: 'Montenegro',
        ci: '8390038',
        phone: '+59172848249',
        email: 'marco.montenegro@gmail.com',
        code: '8390038'
    }
]

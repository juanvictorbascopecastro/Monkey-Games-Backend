const http = require('http')
const app = require('./app/server.js')
const server = http.createServer(app)
// const socketIO = require('socket.io')
const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: 'GET, POST, PUT, DELETE',
        allowedHeaders: 'Content-Type, Authorization'
    }
})
const { sequelize } = require('./app/database/db')

// Eventos de sockets
// module.exports.io = socketIO(server, {
//     cors: {
//         origin: 'http://localhost:5173',
//         methods: 'GET, POST, PUT, DELETE',
//         allowedHeaders: 'Content-Type, Authorization'
//     }
// })
// escuchamos el servidor
require('./app/sockets')(io)
const port = process.env.PORT || 3000
server.listen(port, err => {
    if (err) throw new Error(err)
    console.log(`Servidor corriendo en puerto ${port}`)
})

// Probando la base de datos
async function main() {
    sequelize
        .authenticate()
        .then(() => {
            console.log('DB Conectado correctamente a la base de datos')
        })
        .catch(error => {
            console.log('Fallo al conectar a la base de datos\n', error)
        })
}
main()

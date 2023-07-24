const http = require('http')
const app = require('./app/server.js')
const server = http.createServer(app)
const socket = require('socket.io')(server)
const { sequelize } = require('./app/database/db')

// escuchamos el servidor
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

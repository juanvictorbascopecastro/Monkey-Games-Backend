const { QrClass } = require('../classes/qrClass')
const { Client, User } = require('../models/index')
const attributes = [
    'id',
    'name',
    'lastName',
    'email',
    'phone',
    'photo',
    'ci',
    'code',
    'active',
    'createdAt'
]
const { UserClass } = require('./../classes/usersClass')
const userClass = new UserClass()
const qrClass = new QrClass()

const SOCKET_USER_CONNECT = 'user-connected'
const SOCKET_USER_DISCONNECT = 'user-disconnected'
const SOCKET_CLIENTE_BUSCADO = 'enviar-cliente'
const SOCKET_CLIENTE_ATENDIDO = 'atender-cliente'

const socketController = socket => {
    // cuando se conecta un usuario
    socket.on(SOCKET_USER_CONNECT, async (data, callback) => {
        try {
            // console.log('CONECTADO: ', socket.id)
            if (!data.id)
                return callback({ error: true, message: 'El id es necesario!' })

            const params = await User.findByPk(data.id)
            const user = {
                name: `${params.dataValues.name} ${
                    params.dataValues.lastName || ''
                }`,
                rol: params.dataValues.rol,
                email: params.dataValues.email,
                id: params.dataValues.id,
                socketId: socket.id,
                device: data.device,
                date: new Date().getTime()
            }
            const list = userClass.addPerson(user)
            callback({ codeNew: socket.id, list, qrs: qrClass.getDatas() })
            socket.broadcast.emit(SOCKET_USER_CONNECT, {
                codeNew: socket.id,
                list
            })
        } catch (e) {
            console.log(e)
        }
    })
    // cuando se desconecta un usuario
    socket.on('disconnect', () => {
        const person = userClass.removePerson(socket.id)
        // console.log('DESCONECTADO: ', socket.id)
        socket.broadcast.emit(SOCKET_USER_DISCONNECT, {
            codeNew: socket.id,
            list: userClass.getPersons()
        })
    })

    // cuando solicita un cliente
    socket.on(SOCKET_CLIENTE_BUSCADO, async (data, callback) => {
        const response = await Client.findOne(
            { where: { code: data.code } },
            { attributes }
        )
        const params = {
            socketId: socket.id,
            codeEmit: Date.now().toString(30),
            client: response.dataValues,
            date: new Date().getTime()
        }
        const list = qrClass.addData(params)
        callback(params) // devolvemos al cliente
        socket.broadcast.emit(SOCKET_CLIENTE_BUSCADO, {
            list,
            codeEmit: params.codeEmit
        })
        // socket.broadcast.to(socketId).emit(SOCKET_CLIENTE_BUSCADO)
        // socket.join('nombre-sala')
        // socket.broadcast.to('nombre-sala').emit(SOCKET_CLIENTE_BUSCADO)
    })
    // cuando ya se atendio un cliente
    socket.on(SOCKET_CLIENTE_ATENDIDO, async (code, callback) => {
        try {
            const params = qrClass.removeData(code)
            callback(qrClass.getDatas())
            socket.broadcast.emit(SOCKET_CLIENTE_ATENDIDO, {
                list: qrClass.getDatas(),
                codeEmit: params?.codeEmit
            })
        } catch (e) {
            console.log(e)
        }
    })
}
module.exports = { socketController }

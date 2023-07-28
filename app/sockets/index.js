const { socketController } = require('./controller')
module.exports = io => {
    io.on('connection', socketController)
}

const express = require('express')
// const socketIO = require('socket.io');
const expressUpload = require('express-fileupload')
const path = require('path')
const cors = require('cors')
const app = express()
const { versionRouter } = require('./../config/global')
const session = require('express-session')
const publicPath = path.resolve(__dirname, '../public')

app.use(express.static(publicPath))
app.use(cors())
app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SECRET_KEY || 'secretkey-default'
    })
)
app.use(
    expressUpload({
        useTempFiles: true,
        tempFileDir: '/tmp/',
        createParentPath: true
    })
)
app.use(express.json())
app.get(versionRouter, (req, res) =>
    res.json({ welcome: 'Bienvenidos a la API de Monkey Games' })
)

app.use(versionRouter, require('./routes'))

module.exports = app

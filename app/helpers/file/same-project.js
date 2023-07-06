const fs = require('fs')
const path = require('path')
// GUARDAR ARCHIVO
const saveLocal = (archivo, folder, nombreTeam) =>
    new Promise((resolve, reject) => {
        const uploadPath = path.join(
            __dirname,
            '../../uploads/',
            folder,
            nombreTeam
        )
        archivo.mv(uploadPath, err => {
            if (err) {
                return reject(err)
            }
            return resolve(`uploads/${folder}/${nombreTeam}`)
        })
    })

// ELIMINAR ARCHIVO
const removeFile = router =>
    new Promise((resolve, reject) => {
        // remover de local
        let pathRemove = path.join(__dirname, '../../')
        const arrayRouter = router.split('/')
        for (let i = 0; i < arrayRouter.length; i++) {
            pathRemove = path.join(pathRemove, arrayRouter[i])
        }
        if (fs.existsSync(pathRemove)) {
            fs.unlinkSync(pathRemove)
            return resolve('Eliminado correctamente!')
        }
        return reject('La ruta del archivo no existe!')
    })

// OBTENER ARCHIVO
const getFile = router =>
    new Promise((resolve, reject) => {
        let showPath = path.join(__dirname, '../../')
        if (!router) reject('No se encontro la imagen!')
        const arrayRouter = router.split('/')

        for (let i = 0; i < arrayRouter.length; i++) {
            showPath = path.join(showPath, arrayRouter[i])
        }
        if (fs.existsSync(showPath)) {
            return resolve(showPath)
        }
        return reject('La ruta del archivo no existe!')
    })

module.exports = {
    saveLocal,
    removeFile,
    getFile
}

const { v4: uuidv4 } = require('uuid')
const {
    saveLocal,
    removeFile,
    getFile,
} = require('./same-project')

const uploadFile = (
    archivo,
    folder = '',
    extencionesValida = ['png', 'jpg', 'jpeg', 'gif']
) =>
    new Promise(async (resolve, reject) => {
        const nameShort = archivo.name.split('.')
        const extencion = nameShort[nameShort.length - 1]
        // validar lq extencion
        if (!extencionesValida.includes(extencion.toLowerCase())) {
            return reject(
                `La extencion ${extencion} no es permitida, solo se permite archivos ${extencionesValida}`
            )
        }
        const nombreTeam = `${uuidv4()}.${extencion}`
        let response
        try {
            response = await saveLocal(archivo, folder, nombreTeam)
        } catch (error) {
            reject(error)
        }
        return resolve({
            pathFile: response
        })
    })
module.exports = {
    uploadFile,
    removeFile,
    getFile
}

const jwt = require('jsonwebtoken')
const { User } = require('../models/index')
const { Op } = require('sequelize')
const { valueAdmin } = require('./../../config/global')
const bcrypt = require('bcrypt')

// verifica si tiene token
const validateToken = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorizaageón!' })
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findByPk(id, {
            attributes: [
                'id',
                'name',
                'lastName',
                'email',
                'phone',
                'photo',
                'rol',
                'active',
                'password',
                'createdAt'
            ]
        })
        if (!user.dataValues.active) {
            return res.status(401).json({
                msg: 'Su cuenta se encuentra desactivada!'
            })
        }
        req.currentUser = user.dataValues
        next()
    } catch (err) {
        return res.status(401).json({
            msg: 'Token no valido!'
        })
    }
}
// verifica si ese rol tiene acceso a esta accion
const validateRoles = (req, res, next) => {
    if (req.rolePermissions.indexOf(req.currentUser.rol) > -1) next()
    else
        return res.status(403).json({
            msg: `El usuario con el rol ${req.currentUser.rol} no tiene acceso a realiar esta funcion!`
        })
}
// verificamos acciones propios
const validateTokenPropio = async (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(403).send({ message: 'No tienes autorización!' })
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
        if (req.rolePermissions) {
            // si se espesifica un rol es que tambien permite ese rol hacer esta funcion
            if (req.rolePermissions.indexOf(req.currentUser.rol) > -1) {
                next()
                return
            }
        }

        const { id } = jwt.verify(token, process.env.SECRET_KEY)
        if (!id)
            return res.status(401).json({
                msg: 'El token esta vencido!'
            })
        const person = await User.findByPk(req.params.id, {
            attributes: [
                'id',
                'name',
                'lastName',
                'email',
                'phone',
                'photo',
                'rol',
                'active',
                'password',
                'createdAt'
            ]
        })
        if (!person)
            // si el id no existe
            return res.status(404).json({
                msg: `No exite el usuario con el id ${req.params.id}!`
            })
        // si su cuenta esta activa
        if (!person.dataValues.active)
            return res.status(401).json({
                msg: 'Su cuenta se encuentra desactivada!'
            })
        // si el id enviado es el mismo del token
        if (person.dataValues.id !== parseInt(req.params.id, 10))
            return res.status(403).json({
                msg: '¡Esta acción solo está autorizada para el propietari@ de la misma cuenta!'
            })
        // verificamos si el password actual es correcto
        const matchUser = await bcrypt.compare(
            req.body.passwordReal,
            person.dataValues.password
        )
        // si no es correcto devolvemos el error
        if (!matchUser) {
            return res.status(400).json({
                msg: 'La contraseña actual no es correcta!'
            })
        }
        req.currentUser = person.dataValues
        next()
    } catch (err) {
        console.log(err)
        return res.status(401).json({
            msg: 'El Token no es valido!'
        })
    }
}

module.exports = {
    validateToken,
    validateRoles,
    validateTokenPropio
}

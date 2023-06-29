const express = require('express')
const router = express.Router()
const { check, param } = require('express-validator')

// * VALIDATIONS
const {
    validateToken,
    validateRoles,
    validateTokenPropio
} = require('../middlewares/auth')
const { validateFields } = require('../middlewares/validateFields')
const {
    checkExitsData,
    checkExitsDataUpdate
} = require('./../helpers/validate-db')

const { User } = require('../models/index')

// * CONTROLLERS
const UserController = require('../controllers/UserController')
const AbortController = require('../controllers/AuthController')
const { rolUsers } = require('../../config/global')

// * ROUTES
router.get(
    '/',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles
    ],
    UserController.select
)
router.get(
    '/:id',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles,
        param('id', 'Invalid id').notEmpty().isNumeric(),
        validateFields
    ],
    UserController.getById
)
router.post(
    '/',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin']
            next()
        },
        validateRoles,
        check('name', '"name" es requerido!').not().isEmpty(),
        // check('phone', '"phone" es requerido!').not().isEmpty(),
        check('rol', '"rol" es requerido!').not().isEmpty(),
        check('rol').custom(value => {
            if (rolUsers.indexOf(value) > -1) return true // si el rol asignado esta entre los roles
            return Promise.reject('El rol asignado no es valido!')
        }),
        check('email', '¡El correo electrónico es requerido!').not().isEmpty(),
        check(
            'email',
            '¡"email" debe ser de tipo Correo electronico!'
        ).isEmail(),
        check('password', '¡"password" es requerido!').not().isEmpty(),
        check(
            'password',
            'El campo "password" debe tener al menos 6 caracteres'
        ).isLength({ min: 6 }),
        check('email').custom(value => checkExitsData(value, 'email', User)),
        validateFields
    ],
    AbortController.create
)
router.put(
    '/:id',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin']
            next()
        },
        validateRoles,
        param('id', 'Invalid id!').notEmpty().isNumeric(),
        check('rol').custom(value => {
            if (!value) return true
            if (rolUsers.indexOf(value) > -1) return true // si el rol asignado esta entre los roles
            return new Promise.reject('El rol asignado no es valido!')
        }),
        check('email').custom((email, { req }) => {
            if (email)
                return checkExitsDataUpdate(
                    email,
                    'email',
                    User,
                    parseInt(req.params.id, 10)
                )
            return true
        }),
        validateFields
    ],
    UserController.update
)
router.delete(
    '/:id',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin']
            next()
        },
        validateTokenPropio,
        param('id', 'Invalid id!').notEmpty().isNumeric(),
        validateFields
    ],
    UserController.delete
)

module.exports = router

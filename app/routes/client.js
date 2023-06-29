const express = require('express')
const { check, param } = require('express-validator')
const {
    validateToken,
    validateRoles,
    validateTokenPropio
} = require('../middlewares/auth')
const router = express.Router()

// * VALIDATIONS
const { validateFields } = require('../middlewares/validateFields')
const {
    checkExitsDataUpdate,
    checkExitsData
} = require('./../helpers/validate-db')
// * CONTROLLERS
const ClientController = require('../controllers/ClientController')
const { Client } = require('../models/index')

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
    ClientController.select
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
    ClientController.getById
)
router.post(
    '/',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles,
        check('name', '"name" es requerido!').not().isEmpty(),
        // check('phone', '"phone" es requerido!').not().isEmpty(),
        // check('email', '¡El correo electrónico es requerido!').not().isEmpty(),
        check('email').custom((email, { req }) => {
            if (email)
                return checkExitsData(
                    email,
                    'email',
                    Client,
                    parseInt(req.params.id, 10)
                )
            return true
        }),
        check('ci').custom((ci, { req }) => {
            if (ci)
                return checkExitsData(
                    ci,
                    'ci',
                    Client,
                    parseInt(req.params.id, 10)
                )
            return true
        }),
        validateFields
    ],
    ClientController.create
)
router.put(
    '/:id',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles,
        param('id', 'Invalid id!').notEmpty().isNumeric(),
        check('email').custom((email, { req }) => {
            if (email)
                return checkExitsDataUpdate(
                    email,
                    'email',
                    Client,
                    parseInt(req.params.id, 10)
                )
            return true
        }),
        check('ci').custom((ci, { req }) => {
            if (ci)
                return checkExitsDataUpdate(
                    ci,
                    'ci',
                    Client,
                    parseInt(req.params.id, 10)
                )
            return true
        }),
        validateFields
    ],
    ClientController.update
)
router.delete(
    '/:id',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateTokenPropio,
        param('id', 'Invalid id!').notEmpty().isNumeric(),
        validateFields
    ],
    ClientController.delete
)

module.exports = router

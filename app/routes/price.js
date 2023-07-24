const express = require('express')
const { check, param } = require('express-validator')

const router = express.Router()

// * VALIDATIONS
const { validateToken, validateRoles } = require('../middlewares/auth')
const { validateFields } = require('../middlewares/validateFields')
const {
    checkExitsData,
    checkExitsDataUpdate
} = require('../helpers/validate-db')

// * CONTROLLERS
const PricesController = require('../controllers/PricesController')

// * MODULOS
const { User } = require('../models/index')
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
    PricesController.select
)
router.get(
    '/:id',
    [
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles,
        param('id', 'Invalid id').notEmpty().isNumeric(),
        validateFields
    ],
    PricesController.getById
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
        check('minutes', '"minutes" es requerido!').not().isEmpty(),
        check('price', '"price" es requerido!').not().isEmpty(),
        check('idUsers', '"idUsers" es requerido!').not().isEmpty().isNumeric(),
        check('idUsers').custom(value => checkExitsData(value, 'id', User)),
        validateFields
    ],
    PricesController.create
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
        param('id', 'Invalid id').notEmpty().isNumeric(),
        check('idUsers').custom(value => {
            if (value) return checkExitsData(value, 'id', User)
            return true
        }),
        validateFields
    ],
    PricesController.update
)
router.delete(
    '/:id',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin']
            next()
        },
        validateRoles,
        param('id', 'Invalid id').notEmpty().isNumeric(),
        validateFields
    ],
    PricesController.delete
)

module.exports = router

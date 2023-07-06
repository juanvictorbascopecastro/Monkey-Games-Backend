const express = require('express')
const { check, param } = require('express-validator')

const router = express.Router()

// * VALIDATIONS
const { validateToken, validateRoles } = require('../middlewares/auth')
const { validateFields } = require('../middlewares/validateFields')
const {
    checkExitsData,
    checkExitsDataUpdate,
    existsInTable
} = require('../helpers/validate-db')

// * CONTROLLERS
const CajaController = require('../controllers/CajaController')

// * MODULOS
const { Caja, User } = require('../models/index')
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
    CajaController.select
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
    CajaController.getById
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
        check('name', 'Name is required!').not().isEmpty(),
        check('name').custom(value => checkExitsData(value, 'name', Caja)),
        check('idUsers').custom(value => {
            if (value) return existsInTable(value, 'id', User)
            return true
        }),
        validateFields
    ],
    CajaController.create
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
            if (value) return existsInTable(value, 'id', User)
            return true
        }),
        check('name').custom((name, { req }) => {
            if (name)
                return checkExitsDataUpdate(
                    name,
                    'name',
                    Caja,
                    parseInt(req.params.id, 10)
                )
            return true
        }),
        validateFields
    ],
    CajaController.update
)
router.delete(
    '/:id',
    [
        validateToken,
        param('id', 'Invalid id').notEmpty().isNumeric(),
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin']
            next()
        },
        validateFields
    ],
    CajaController.delete
)

module.exports = router

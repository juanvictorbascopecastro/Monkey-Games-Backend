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
const RegisterController = require('../controllers/RegisterController')

// * MODULOS
const { User, Caja, Client } = require('../models/index')
const { checkCajaParams } = require('../helpers/verificar-caja')
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
    RegisterController.enCurso
)
router.get(
    '/filter',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles,
        check('date', '"date" es requerido!').not().isEmpty(),
        validateFields
    ],
    RegisterController.selectFilter
)
router.get(
    '/history',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles,
        check('id', '"id" es requerido!').not().isEmpty(),
        validateFields
    ],
    RegisterController.selectHistory
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
        check('minutes', '"minutes" is required!').not().isEmpty().isNumeric(),
        check('date', '"date" is required!').not().isEmpty(),
        check('idUsers', '"idUsers" is required!').not().isEmpty().isNumeric(),
        check('idCajas', '"idCajas" is required!').not().isEmpty().isNumeric(),
        check('idUsers').custom(value => checkExitsData(value, 'id', User)),
        check('idCajas').custom(value => checkExitsData(value, 'id', Caja)),
        // check('idClients').custom(value => checkExitsData(value, 'id', Client)),
        check('idClients').custom(value => {
            if (value) return checkExitsData(value, 'id', Client)
            return true
        }),
        validateFields,
        checkCajaParams
    ],
    RegisterController.create
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
        param('id', 'Invalid id').notEmpty().isNumeric(),
        check('minutes', '"minutes" is required!').not().isEmpty().isNumeric(),
        // check('date', '"date" is required!').not().isEmpty(),
        check('idUsers').custom(value => {
            if (value) return checkExitsData(value, 'id', User)
            return true
        }),
        check('idCajas').custom(value => {
            if (value) return checkExitsData(value, 'id', Caja)
            return true
        }),
        check('idClients').custom(value => {
            if (value) return checkExitsData(value, 'id', Client)
            return true
        }),
        validateFields,
        checkCajaParams
    ],
    RegisterController.update
)
router.delete(
    '/:id',
    [
        validateToken,
        param('id', 'Invalid id').notEmpty().isNumeric(),
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateFields
    ],
    RegisterController.delete
)
router.post(
    '/end/:id',
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
    RegisterController.endData
)

module.exports = router

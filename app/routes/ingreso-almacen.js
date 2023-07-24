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
const IngresoAlmacenController = require('../controllers/IngresoAlmacenController')

// * MODULOS
const { Product, User, Caja } = require('../models/index')
const { checkCajaParams } = require('../helpers/verificar-caja')
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
    IngresoAlmacenController.select
)
// router.get(
//     '/:id',
//     [
//         (req, res, next) => {
//             req.rolePermissions = ['admin', 'cajero']
//             next()
//         },
//         validateRoles,
//         param('id', 'Invalid id').notEmpty().isNumeric(),
//         validateFields
//     ],
//     IngresoAlmacenController.getById
// )
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
    IngresoAlmacenController.selectFilter
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
        check('amount', '"amount" is required!').not().isEmpty(),
        check('price', '"price" is required!').not().isEmpty(),
        check('idProducts', '"idProducts" is required!')
            .not()
            .isEmpty()
            .isNumeric(),
        check('idUsers', '"idUsers" is required!').not().isEmpty().isNumeric(),
        check('idCajas', '"idCajas" is required!').not().isEmpty().isNumeric(),
        check('idProducts').custom(value =>
            checkExitsData(value, 'id', Product)
        ),
        check('idUsers').custom(value => checkExitsData(value, 'id', User)),
        check('idCajas').custom(value => checkExitsData(value, 'id', Caja)),
        validateFields,
        checkCajaParams
    ],
    IngresoAlmacenController.create
)
router.delete(
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
    IngresoAlmacenController.delete
)

module.exports = router

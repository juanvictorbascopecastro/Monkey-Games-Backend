const express = require('express')
const { check, param } = require('express-validator')
const router = express.Router()
// * VALIDATIONS
const { validateToken, validateRoles } = require('../middlewares/auth')
const { validateFields } = require('../middlewares/validateFields')

const {
    checkExitsData,
    existeIdArregloObject
} = require('../helpers/validate-db')

// MODELS
const { Product, Client, User, Caja } = require('../models/index')

// * CONTROLLERS
const ventaController = require('../controllers/VentaController')
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
    ventaController.select
)

// router.get(
//     '/:id',
//     [
//         validateToken,
//         (req, res, next) => {
//             req.rolePermissions = ['admin', 'cajero']
//             next()
//         },
//         validateRoles,
//         param('id', 'Invalid id').notEmpty().isNumeric(),
//         validateFields
//     ],
//     ventaController.getById
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
    ventaController.selectFilter
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
        check('date').not().isEmpty().withMessage('Date is required!'),
        check('importe')
            .not()
            .isEmpty()
            .isNumeric()
            .withMessage('Importe is required!'),
        check('total', 'total is required!').not().isEmpty(),
        check('idClients').custom(value => {
            if (value) return checkExitsData(value, 'id', Client)
            return true
        }),
        check('idCajas').custom(value => checkExitsData(value, 'id', Caja)),
        check('idUsers', 'idUsers is required!').not().isEmpty(),
        check('idUsers').custom(value => checkExitsData(value, 'id', User)),
        check('products').custom(values => {
            const errors = []
            if (!Array.isArray(values)) {
                errors.push(
                    `Los valores de productos no es valido, debe enviar un arreglo`
                )
                return Promise.reject(errors)
            }
            Object.values(values).forEach((value, index) => {
                if (!value.amount)
                    errors.push(
                        `El campo amount es requerido del objeto en la posicion ${index}`
                    )
                if (!value.idProducts)
                    errors.push(
                        `El campo idProducts es requerido del objeto en la posicion ${index}`
                    )
            })
            if (errors.length > 0) return Promise.reject(errors)
            else return true
        }),
        check('products').custom(values =>
            existeIdArregloObject(values, Product, 'idProducts')
        ),
        validateFields,
        checkCajaParams
    ],
    ventaController.create
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
        check('date').not().isEmpty().withMessage('Date is required!'),
        check('importe')
            .not()
            .isEmpty()
            .isNumeric()
            .withMessage('Importe is required!'),
        check('total', 'total is required!').not().isEmpty(),
        check('idClients').custom(value => {
            if (value) return checkExitsData(value, 'id', Client)
            return true
        }),
        check('idCajas').custom(value => {
            if (value) return checkExitsData(value, 'id', Caja)
            return true
        }),
        check('idUsers').custom(value => {
            if (value) return checkExitsData(value, 'id', User)
            return true
        }),
        check('products').custom(values => {
            const errors = []
            if (!Array.isArray(values)) {
                errors.push(
                    `Los valores de productos no es valido, debe enviar un arreglo`
                )
                return Promise.reject(errors)
            }
            Object.values(values).forEach((value, index) => {
                if (!value.amount)
                    errors.push(
                        `El campo amount es requerido del objeto en la posicion ${index}`
                    )
                if (!value.idProducts)
                    errors.push(
                        `El campo idProducts es requerido del objeto en la posicion ${index}`
                    )
            })
            if (errors.length > 0) return Promise.reject(errors)
            else return true
        }),
        check('products').custom(values =>
            existeIdArregloObject(values, Product, 'idProducts')
        ),
        validateFields,
        checkCajaParams
    ],
    ventaController.create
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
    ventaController.delete
)

module.exports = router

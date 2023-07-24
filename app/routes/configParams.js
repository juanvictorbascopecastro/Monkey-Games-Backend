const express = require('express')
const { check } = require('express-validator')

const router = express.Router()

// * VALIDATIONS
const {
    validateToken,
    validateRoles,
    validateTokenSpecial
} = require('../middlewares/auth')
const { validateFields } = require('../middlewares/validateFields')

// * CONTROLLERS
const configParamsController = require('../controllers/ConfigParamsController')
const {
    CONFIG_INGRESO,
    CONFIG_STOCK,
    CONFIG_VENTA,
    CONFIG_CAJA
} = require('../database/seeders/20230716170025-configParams')

// * ROUTES
router.get(
    '/',
    validateToken,
    (req, res, next) => {
        req.rolePermissions = ['admin', 'cajero']
        next()
    },
    validateRoles,
    configParamsController.select
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
        check('name', 'name is required!').not().isEmpty(),
        check('name').custom(value => {
            if (
                [
                    CONFIG_INGRESO,
                    CONFIG_STOCK,
                    CONFIG_VENTA,
                    CONFIG_CAJA
                ].indexOf(value) > -1
            )
                return true // si el rol asignado esta entre los roles
            return Promise.reject(
                'Los parámetros enviados para la configuración no son válidos!'
            )
        }),
        check('datas', 'datas is required!').not().isEmpty(),
        validateFields
    ],
    configParamsController.create
)

module.exports = router

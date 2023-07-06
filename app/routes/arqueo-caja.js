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
const ArqueoCajaController = require('../controllers/ArqueoCajaController')

// * MODULOS
const { User, Caja } = require('../models/index')
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
    ArqueoCajaController.historico
)
router.get(
    '/movement/:id',
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
    ArqueoCajaController.movement
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
    ArqueoCajaController.getById
)
// * ROUTES
router.post(
    '/',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles,
        check('amount', '"amount" is required!').not().isEmpty().isNumeric(),
        check('date', '"date" is required!').not().isEmpty(),
        check('idUsers', '"idUsers" is required!').not().isEmpty().isNumeric(),
        // check('data')
        //     .isDate()
        //     .withMessage(
        //         'Formato de fecha no válido. Utilice el formato AAAA-MM-DD.'
        //     ),
        check('idUsers').custom(value => {
            if (value) return checkExitsData(value, 'id', User)
            return true
        }),
        check('idCajas').custom(value => {
            if (value) return checkExitsData(value, 'id', Caja)
            return true
        }),
        validateFields
    ],
    ArqueoCajaController.aperturar
)

module.exports = router

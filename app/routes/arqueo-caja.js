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
    ArqueoCajaController.getMovements
)
// * ROUTES
router.post(
    '/aperturar',
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
        check('idCajas', '"idCajas" is required!').not().isEmpty().isNumeric(),
        check('idUsers').custom(value => checkExitsData(value, 'id', User)),
        check('idCajas').custom(value => checkExitsData(value, 'id', Caja)),
        // check('data')
        //     .isDate()
        //     .withMessage(
        //         'Formato de fecha no válido. Utilice el formato AAAA-MM-DD.'
        //     ),
        validateFields
    ],
    ArqueoCajaController.aperturar
)
router.post(
    '/cerrar',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin', 'cajero']
            next()
        },
        validateRoles,
        check('endAmount', '"endAmount" is required!')
            .not()
            .isEmpty()
            .isNumeric(),
        check('expected', '"expected" is required!')
            .not()
            .isEmpty()
            .isNumeric(),
        check('date', '"date" is required!').not().isEmpty(),
        check('idUsers', '"idUsers" is required!').not().isEmpty().isNumeric(),
        check('idCajas', '"idCajas" is required!').not().isEmpty().isNumeric(),
        check('idUsers').custom(value => checkExitsData(value, 'id', User)),
        check('idCajas').custom(value => checkExitsData(value, 'id', Caja)),
        validateFields
    ],
    ArqueoCajaController.cerrar
)

module.exports = router

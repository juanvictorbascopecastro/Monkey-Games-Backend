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
const CategoryController = require('../controllers/CategoryController')

// * MODULOS
const { Category } = require('../models/index')
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
    CategoryController.select
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
    CategoryController.getById
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
        check('name', 'Name is required!').not().isEmpty(),
        check('name').custom(value => checkExitsData(value, 'name', Category)),
        validateFields
    ],
    CategoryController.create
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
        check('name').custom((name, { req }) => {
            if (name)
                return checkExitsDataUpdate(
                    name,
                    'name',
                    Category,
                    parseInt(req.params.id, 10)
                )
            return true
        }),
        validateFields
    ],
    CategoryController.update
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
    CategoryController.delete
)

module.exports = router

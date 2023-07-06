const express = require('express')
const { check, param } = require('express-validator')

const router = express.Router()

// * VALIDATIONS
const { validateToken, validateRoles } = require('../middlewares/auth')
const { validateFields } = require('../middlewares/validateFields')

const { existsInTable } = require('../helpers/validate-db')

const { Category } = require('../models/index')

// * CONTROLLERS
const productController = require('../controllers/ProductController')

// * ROUTES
router.get(
    '/',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin']
            next()
        },
        validateRoles
    ],
    productController.select
)
router.get(
    '/filter/category',
    [
        validateToken,
        (req, res, next) => {
            req.rolePermissions = ['admin']
            next()
        },
        validateRoles
    ],
    productController.filterCategoryProduct
)
router.get(
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
    productController.getById
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
        check('price', 'Price is required!').not().isEmpty().isNumeric(),
        check('idCategories', 'idCategories is required!').not().isEmpty(),
        check('idCategories').custom(value =>
            existsInTable(value, 'id', Category)
        ),
        validateFields
    ],
    productController.create
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
        param('id', 'Invalid id!').notEmpty().isNumeric(),
        check('idCategories').custom(value => {
            if (value) return existsInTable(value, 'id', Category)
            return true
        }),
        validateFields
    ],
    productController.update
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
    productController.delete
)

module.exports = router

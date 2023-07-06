const express = require('express')

const router = express.Router()
const { param } = require('express-validator')

// * VALIDATIONS
const { validateToken, validateRoles } = require('../middlewares/auth')

// * CONTROLLERS
const FileController = require('../controllers/FileController')

// * ROUTES
router.get(
    '/image/:nameModel/:id',
    // [
    //     validateToken,
    //     (req, res, next) => {
    //         req.rolePermissions = ['admin', 'cajero']
    //         next()
    //     },
    //     validateRoles
    // ],
    param('id', 'Invalid id!').notEmpty().isNumeric(),
    param('nameModel', '"nameModel" es requerido!').notEmpty(),
    // param('nameFileDb', '"nameFileDb" es requerido!').notEmpty(),
    FileController.getSrcImage
)

module.exports = router

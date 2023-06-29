const express = require('express')
const { check, param } = require('express-validator')
const {
    validateToken,
    validateRoles,
    validateTokenPropio
} = require('../middlewares/auth')
const router = express.Router()

// * VALIDATIONS
const { validateFields } = require('../middlewares/validateFields')
const { checkExitsDataUpdate } = require('./../helpers/validate-db')
// * CONTROLLERS
const AuthController = require('../controllers/AuthController')
const { User } = require('../models/index')
const { rolUsers } = require('../../config/global')

router.post(
    '/signIn',
    [
        check('email', '¡El correo electrónico es requerido!').not().isEmpty(),
        check(
            'email',
            '¡"email" debe ser de tipo Correo electronico!'
        ).isEmail(),
        check('password', '¡"password" es requerido!').not().isEmpty(),
        validateFields
    ],
    AuthController.signIn
)

router.put(
    '/update/:id',
    [
        validateToken,
        param('id', 'Invalid id!').notEmpty().isNumeric(),
        check('passwordReal', 'Su contraseña actual es requerido!')
            .not()
            .isEmpty(),
        check('rol').custom(value => {
            if (!value) return true
            if (rolUsers.indexOf(value) > -1) return true // si el rol asignado esta entre los roles
            return new Promise.reject('El rol asignado no es valido!')
        }),
        check('email').custom((email, { req }) => {
            if (email)
                return checkExitsDataUpdate(
                    email,
                    'email',
                    User,
                    parseInt(req.params.id, 10)
                )
            return true
        }),
        validateFields,
        validateTokenPropio
    ],
    AuthController.update
)
router.get(
    '/config/:id',
    [
        validateToken,
        param('id', 'Invalid id!').notEmpty().isNumeric(),
        validateFields,
        validateTokenPropio
    ],
    AuthController.getUser
)

router.post(
    '/signOut',
    [
        // validateTokenSpecial,
        check('id', 'Invalid id!').notEmpty().isNumeric(),
        validateFields
    ],
    AuthController.signOut
)

module.exports = router

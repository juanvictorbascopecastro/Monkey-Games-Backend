const express = require('express')

const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/user', require('./user'))
router.use('/client', require('./client'))
router.use('/category', require('./category'))
router.use('/product', require('./product'))
router.use('/files', require('./file'))
router.use('/cajas', require('./caja'))
router.use('/arqueo-caja', require('./arqueo-caja'))
router.use('/register', require('./register'))
router.use('/prices', require('./price'))
router.use('/ingreso-almacen', require('./ingreso-almacen'))
router.use('/venta', require('./venta'))
router.use('/config-params', require('./configParams'))

module.exports = router

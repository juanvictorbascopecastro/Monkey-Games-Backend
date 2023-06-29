const express = require('express')

const router = express.Router()

router.use('/auth', require('./auth'))
router.use('/user', require('./user'))
router.use('/client', require('./client'))
router.use('/category', require('./category'))

module.exports = router

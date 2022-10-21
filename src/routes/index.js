const router = require('express').Router()
const {errorHandler, notFoundHandler} = require('../middleware/errors')
const blogs = require('./blogs')

router.use('/blogs', blogs)

router.use(notFoundHandler)
router.use(errorHandler)

module.exports = router
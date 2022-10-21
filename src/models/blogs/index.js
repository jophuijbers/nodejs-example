const mongoose = require('mongoose')
const blogSchema = require('./blog-schema')

module.exports = mongoose.model('Blog', blogSchema)
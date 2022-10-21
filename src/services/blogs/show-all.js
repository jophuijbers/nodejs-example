const Blog = require('../../models/blogs')

const showBlog = async (req, res, next) => {
    try {
        const blogs = await Blog.find()
        res.json(blogs)
    } catch(err) {
        next(err)
    }
}

module.exports = showBlog
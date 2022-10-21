const Blog = require('../../models/blogs')

const showBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)
        res.json(blog)
    } catch(err) {
        next(err)
    }
}

module.exports = showBlog
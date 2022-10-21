const Blog = require('../../models/blogs')

const deleteBlog = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)
        await blog.delete()
        res.sendStatus(204)
    } catch(err) {
        next(err)
    }
}

module.exports = deleteBlog
const Blog = require('../../models/blogs')

const createBlog = async (req, res, next) => {
    const blog = new Blog({
        title: req.body.title,
        body: req.body.body,
        author: req.body.author
    })

    try {
        const newBlog = await blog.save()
        res.status(201).json(newBlog)
    } catch(err) {
        next(err)
    }
}

module.exports = createBlog
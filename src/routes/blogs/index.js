const router = require('express').Router()
const {showAll, showBlog, createBlog, deleteBlog} = require('../../services/blogs');
const {isAuthor} = require('../../middleware/blogs')

router.get('/', showAll)

router.get('/:id', showBlog)

router.post('/', createBlog)

router.delete('/:id', isAuthor, deleteBlog)

module.exports = router
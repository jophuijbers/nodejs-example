const isAuthor = (req, res, next) => {
    const isAuthor = true
    if (!isAuthor) return res.sendStatus(403)
    next()
}

module.exports = isAuthor
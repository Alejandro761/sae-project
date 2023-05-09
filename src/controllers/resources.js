const getAllResources = (req, res) => {
    res.send ("Mandando todos los recursos")
}

const getResourcesByAuthor = (req, res) => {
    res.send (`Mandando los recursos del autor(a) ${req.params.author}` )
}

module.exports = {
    getAllResources, getResourcesByAuthor
}
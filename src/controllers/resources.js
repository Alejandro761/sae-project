const services = require('../services/resourcesServices')

const getAllResources = (req, res) => {
    const allResources = services.getAllResources()
    res.send ({status: 'OK', data: allResources})
}

const getResourcesByAuthor = (req, res) => {
    const resourcesByAuthor = services.getResourcesByAuthor(req.params.author)
    res.send (`Mandando los recursos del autor(a) ${req.params.author}` )
}

module.exports = {
    getAllResources, getResourcesByAuthor
}
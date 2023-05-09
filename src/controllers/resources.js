const services = require('../services/resourcesServices')

const getAllResources = (req, res) => {
    const allResources = services.getAllResources()
    res.status(200).send ({status: 'OK', data: allResources})
}

const getResourcesByAuthor = (req, res) => {
    const resources = services.getResourcesByAuthor(req, res)
    res.status(200).send ({status: 'OK', data: resources})
}

const getResourcesByArea = (req, res) => {
    const resources = services.getResourcesByArea(req, res)
    res.status(200).send ({status: 'OK', data: resources})
}

const getResourcesByEditorial = (req, res) => {
    const resources = services.getResourcesByEditorial(req, res)
    res.status(200).send ({status: 'OK', data: resources})
}

const getResourcesByTitle = (req, res) => {
    const resources = services.getResourcesByTitle(req, res)
    res.status(200).send ({status: 'OK', data: resources})
}

module.exports = {
    getAllResources, getResourcesByAuthor, getResourcesByArea, getResourcesByEditorial, getResourcesByTitle
}
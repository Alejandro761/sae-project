const services = require('../services/resourcesServices')

const getAllResources = (req, res) => {
    const allResources = services.getAllResources()
    res.status(200).send ({status: 'OK', data: allResources})
}

const getResourcesByAuthor = (req, res) => {
    // const {author} = req.params;
    // console.log(body);
    // const resourcesByAuthor = services.getResourcesByAuthor(req.params.author)
    const resourcesByAuthor = services.getResourcesByAuthor(req, res)

    // res.send (`Mandando los recursos del autor(a) ${req.params.author}` )
    res.status(200).send ({status: 'OK', data: resourcesByAuthor})

}

module.exports = {
    getAllResources, getResourcesByAuthor
}
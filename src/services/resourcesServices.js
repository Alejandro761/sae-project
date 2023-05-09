const DB = require('../database/db.json')

const getAllResources = () => {
    return DB.resources
}

const getResourcesByAuthor = (req, res) => {
    const {author} = req.params;
    const resourcesResult = DB.resources.filter(resources => resources.author.toLocaleLowerCase().includes(author.toLocaleLowerCase()))
    return resourcesResult;
}

const getResourcesByArea = (req, res) => {
    const {area} = req.params;
    const resourcesResult = DB.resources.filter(resources => resources.area.toLocaleLowerCase().includes(area.toLocaleLowerCase()))
    return resourcesResult;
}

const getResourcesByEditorial = (req, res) => {
    const {editorial} = req.params;
    const resourcesResult = DB.resources.filter(resources => resources.editorial.toLocaleLowerCase().includes(editorial.toLocaleLowerCase()))
    return resourcesResult;
}

const getResourcesByTitle = (req, res) => {
    const {title} = req.params;
    const resourcesResult = DB.resources.filter(resources => resources.title.toLocaleLowerCase().includes(title.toLocaleLowerCase()))
    return resourcesResult;
}

module.exports = {getAllResources, getResourcesByAuthor, getResourcesByArea, getResourcesByEditorial, getResourcesByTitle}
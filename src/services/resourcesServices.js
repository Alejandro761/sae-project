const DB = require('../database/db.json')

const getAllResources = () => {
    return DB.resources
}

const getResourcesByAuthor = (req, res) => {
    const {author, area} = req.params;
    const resourcesResult = DB.resources.filter(resources => resources.author.toLocaleLowerCase().includes(author.toLocaleLowerCase())).filter(resources => resources.area == area);
    return resourcesResult;
}

const getResourcesByEditorial = (req, res) => {
    const {editorial, area} = req.params;
    const resourcesResult = DB.resources.filter(resources => resources.editorial.toLocaleLowerCase().includes(editorial.toLocaleLowerCase())).filter(resources => resources.area == area)
    return resourcesResult;
}

const getResourcesByTitle = (req, res) => {
    const {title, area} = req.params;
    const resourcesResult = DB.resources.filter(resources => resources.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())).filter(resources => resources.area == area)
    return resourcesResult;
}

module.exports = {getAllResources, getResourcesByAuthor, getResourcesByEditorial, getResourcesByTitle}
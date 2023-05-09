const DB = require('./db.json')

const getAllResources = () => {
    return DB.resources
}

const getResourcesByAuthor = (req, res) => {
    const {author} = req.params;
    const authors = DB.resources.filter(resource => resource.author == author);
    return authors;
}

module.exports = {getAllResources, getResourcesByAuthor}
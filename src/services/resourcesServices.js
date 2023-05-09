// const Resources = require('../database/Resources')
const DB = require('../database/db.json')

const getAllResources = () => {
    return DB.resources
}

const getResourcesByAuthor = (req, res) => {
    const {author} = req.params;
    // const authors = DB.resources.filter(resource => resource.author == author);
    // const authors = DB.resources.forEach(resource , () => {
    //     resource.author.includes(author)
    //     return resource
    // })
    const authors = DB.resources.filter(resources => resources.author.localeCompare(author))
    return authors;
}

module.exports = {getAllResources, getResourcesByAuthor}
// const getAllResources = () => {
//     const allResources = Resources.getAllResources();
//     return allResources;
// }
// const getResourcesByAuthor = (req, res) => {
//     const resourcesByAuthor = Resources.getResourcesByAuthor(req, res);
//     return resourcesByAuthor;
// }
// const getResourcesByTitle = () => {
//     return 
// }
// const getResourcesByEditorial = () => {
//     return 
// }

// module.exports = {getAllResources, getResourcesByAuthor}

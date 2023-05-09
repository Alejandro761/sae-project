const Resources = require('../database/Resources')

const getAllResources = () => {
    const allResources = Resources.getAllResources();
    return allResources;
}
const getResourcesByAuthor = () => {
    const resourcesByAuthor = Resources.getAllResources();
    return resourcesByAuthor;
}
const getResourcesByTitle = () => {
    return 
}
const getResourcesByEditorial = () => {
    return 
}

module.exports = {getAllResources}
const Resources = require('../database/Resources')

const getAllResources = () => {
    const allResources = Resources.getAllResources();
    return allResources;
}
const getResourcesByAuthor = () => {
    return 
}
const getResourcesByTitle = () => {
    return 
}
const getResourcesByEditorial = () => {
    return 
}

module.exports = {getAllResources}
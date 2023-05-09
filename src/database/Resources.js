const DB = require('./db.json')

const getAllResources = () => {
    return DB.resources
}

module.exports = {getAllResources}
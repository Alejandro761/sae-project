const express = require('express')
const router = express.Router()
const resourcesController = require('../controllers/resources')

router 
    .get ("/", resourcesController.getAllResources)
    .get ("/author/:author/area/:area", resourcesController.getResourcesByAuthor)
    // .get ("/area/:area/area/:area", resourcesController.getResourcesByArea)
    .get ("/editorial/:editorial/area/:area", resourcesController.getResourcesByEditorial)
    .get ("/title/:title/area/:area", resourcesController.getResourcesByTitle)

module.exports = router
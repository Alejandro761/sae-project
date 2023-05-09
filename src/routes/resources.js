const express = require('express')
const router = express.Router()
const resourcesController = require('../controllers/resources')

router 
    .get ("/", resourcesController.getAllResources)
    .get ("/author/:author", resourcesController.getResourcesByAuthor)
    .get ("/area/:area", resourcesController.getResourcesByArea)
    .get ("/editorial/:editorial", resourcesController.getResourcesByEditorial)
    .get ("/title/:title", resourcesController.getResourcesByTitle)

module.exports = router
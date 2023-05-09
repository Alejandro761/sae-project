const express = require('express')
const router = express.Router()
const resourcesController = require('../controllers/resources')

router.
    get ('/', resourcesController.getAllResources)
    get ('/:author', resourcesController.getResourcesByAuthor)
// external imports
const express = require('express');

// internal imports
const { getUsers } = require('../controllers/usersController');
const decorateHtmlResponse = require('../middlewares/common/decorateHtmlResponse');

// router setup
const router = express.Router();

// page_title
const page_title = 'Users';

// router middleware
router.get("/", decorateHtmlResponse(page_title), getUsers);


module.exports = router;
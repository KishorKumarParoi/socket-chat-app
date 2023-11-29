// external imports
const express = require("express");

// internal imports
const { getLogin } = require("../controllers/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// router setup
const router = express.Router();

// page_title
const page_title = "Login";

// router middleware
router.get("/", decorateHtmlResponse(page_title), getLogin);

module.exports = router;

// external imports
const express = require("express");

// internal imports
const { getInbox } = require("../controllers/inboxController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");

// router setup
const router = express.Router();

// page_title
const page_title = "Inbox";

// router middleware
router.get("/", decorateHtmlResponse(page_title), getInbox);

module.exports = router;

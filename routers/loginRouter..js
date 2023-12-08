// external imports
const express = require("express");

// internal imports
const { getLogin, login, logout } = require("../controllers/loginController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const {
  loginValidators,
  loginValidationHandler,
} = require("../middlewares/login/loginValidators");

const { redirectLoggedIn } = require("../middlewares/common/checkLogin");

// router setup
const router = express.Router();

// page_title
const page_title = "Login";

// router middleware
router.get("/", decorateHtmlResponse(page_title), redirectLoggedIn, getLogin);

// login
router.post(
  "/",
  decorateHtmlResponse(page_title),
  loginValidators,
  loginValidationHandler,
  login
);

// logout
router.delete("/", logout);

module.exports = router;

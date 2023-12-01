// external imports
const express = require("express");

// internal imports
const { getUsers, addUser, removeUser } = require("../controllers/usersController");
const decorateHtmlResponse = require("../middlewares/common/decorateHtmlResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/usersValidators");

// router setup
const router = express.Router();

// page_title
const page_title = "Users";

// router middleware
router.get("/", decorateHtmlResponse(page_title), getUsers);

// add user
router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

// remove user
router.delete("/:id", removeUser);

module.exports = router;

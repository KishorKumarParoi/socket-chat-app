// external imports
const { check, validationResult } = require("express-validator");
const path = require("path");
const createError = require("http-errors");
const { unlink } = require("fs");

// internal imports
const User = require("../../models/People");

const loginValidators = [
    check("username")
        .isLength({ min: 1 })
        .withMessage("Mobile Number or Email is required")
        .trim(),
    check("password")
        .isLength({ min: 1 })
        .withMessage("Password is required")
        .trim(),
];

const loginValidationHandler = function (req, res, next) { 
    const errors = validationResult(req);
    const mappedErrors = errors.mapped();

    if (Object.keys(mappedErrors).length === 0) {
        next();
    } else {
        res.render('index', {
            data: {
                username: req.body.username
            },
            errors: mappedErrors,
        });
    }
};

module.exports = {
    loginValidators,
    loginValidationHandler,
}
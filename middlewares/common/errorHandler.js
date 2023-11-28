const createError = require('http-errors');

// not found handler
function notFoundHandler(req, res, next) {
    next(createError(404, 'Your requested content was not found'));
}

// default error handler
function errorHandler(err, req, res, next) {
    // res.render('error', { title: 'Error Page', error: err });    
    // res.local.title = "Error Page";

    // res.status(400).json({
    //     message: "Hello kishor!",
    //     title: "Error Page",
    // })

    res.locals.error = process.env.NODE_ENV === 'development' ? err : { message: err.message };
    res.status(err.status || 500)

    if (!res.locals.html) {
        // html response 
        res.locals.title = "Error Page";
        res.render('error');
    } else {
        res.json(res.locals.error)
    }
}

module.exports = {
    notFoundHandler,
    errorHandler
};
/*
* Title : Socket.io Chat App
* Description : My First Socket.io Chat App
* Author : Kishor Paroi
* Date : 2023/11/28
* Time : 9:40:24 PM
*/

// external imports
const express = require('express');
const http = require('http');
const cookieParser = require('cookie-parser');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

// internal imports
const { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler');

// Create Express App
const app = express();
dotenv.config();

console.log("🚀 ~ file: app.js:20 ~ process.env.APP_NAME:", process.env.APP_NAME)

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
})
    .then(() => console.log('Database Connection Successfull!'))
    .catch(err => console.log(err));

// request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Set View Engine
app.set('view engine', 'ejs');

// cookie parser
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routes

// error handler
app.use(notFoundHandler);
app.use(errorHandler);

// Create Server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
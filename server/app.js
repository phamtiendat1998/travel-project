const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser')

const UserRouter = require('./api/routes/user');
const ImageRouter = require('./api/routes/image');

// ConnectDB
const mongoose = require('mongoose');
const options = {
    db: { native_parser: true },
    server: { poolSize: 5 }
}
// Use native Promises
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/plane-travel', options).then((result) => {
    console.log("Connect DB successfully");
}).catch((err) => {
    console.log("Connect failed :" + err);
});

// Middlewares
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin,X-Requested, Content-Type,Accept,Authorization');
    if (req.method === 'OPTION') {
        res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
        return res.status(200).json({});
    }
    next();
});
// Routes which should handle requests
app.use('/users', UserRouter);
app.use('/image', ImageRouter);

// Errorr handle
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
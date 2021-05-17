"use strict";
process.env.APP_NAME = process.env.APP_NAME || 'car-rental';
process.env.PORT = process.env.PORT || 3010;
process.env.NODE_ENV = process.env.NODE_ENV  || 'dev'

const express = require('express');
const app = express();
app.use(express.json());


const mySqlConnection = require('./connector/mysqlconnection');
mySqlConnection.connect();


const server = app.listen(process.env.PORT, () => {
    let host, port;

    console.log("Listening at port", port);
})

app.use('/', require('./routes'));
app.all('./*', (req, res, next) => {
    next(err);
});



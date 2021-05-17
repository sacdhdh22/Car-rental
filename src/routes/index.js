"use strict";
const express = require('express');
const router = express.Router();

router.get("/ping", function (req, res) {
    return res.status(200).send("pong");
});

router.use('/users', require('./UserRoute'));
router.use('/cars', require('./CarRoute'));
router.use('/booking', require('./BookingRoute'));

module.exports= router;

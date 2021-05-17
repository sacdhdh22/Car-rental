
const express = require('express');
const router = express.Router();
let BookingController = require('../controllers/BookingController');

router.post('/', function(req, res, next ){
    return new BookingController(req).book(function (err, data) {
        if (err != null) {
            return next(err);
        }
        res.status(200).send(data);
    });
})

module.exports = router;
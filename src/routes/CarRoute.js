
const express = require('express');
const router = express.Router();
let CarController = require('../controllers/CarController');

router.post('/', function(req, res, next ){
    return new CarController(req).addCar(function (err, data) {
        if (err != null) {
            return next(err);
        }
        res.status(200).send(data);
    });
})

module.exports = router;
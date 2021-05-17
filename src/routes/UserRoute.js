
const express = require('express');
const router = express.Router();
let UserController = require('../controllers/UserController');

router.post('/', function(req, res, next ){
    return new UserController(req).addUser(function (err, data) {
        if (err != null) {
            return next(err);
        }
        res.status(200).send(data);
    });
})

module.exports = router;
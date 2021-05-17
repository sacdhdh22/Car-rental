"use strict";
const mySqlConnection = require('../connector/mysqlconnection');

class CarModel {
    constructor(request) {
        this.request = request;
    }

    addCar(object, callback) {
        let sql = "insert into car_details SET ?";
        mySqlConnection.query(sql, [object], (err, data) => {
            console.log(data);
            callback(err, data)
        })

    }

}

module.exports = CarModel;

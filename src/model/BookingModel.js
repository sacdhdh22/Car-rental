"use strict";
const mySqlConnection = require('../connector/mysqlconnection');

class BookingModel {
    constructor(request) {
        this.request = request;
    }

    validateCarAvailability(object, callback) {
        let sql = `select * from booking
                   where
                   fk_id_car_details = ? 
                   and now() between fromDate and toDate`;
                   
        mySqlConnection.query(sql, [object.carId], (err, data) => {
            console.log(data);
            callback(err, data)
        })

    }

    book(object, callback) {
        let sql = "insert into booking SET ?";
        mySqlConnection.query(sql, [object], (err, data) => {
            console.log(data);
            callback(err, data)
        })
    }

}

module.exports = BookingModel;

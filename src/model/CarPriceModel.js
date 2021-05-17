"use strict";
const mySqlConnection = require('../connector/mysqlconnection');

class UserModel {
    constructor(request) {
        this.request = request;
    }

    addPrice(object, callback) {
        let sql = "insert into car_pricing SET ?";
        mySqlConnection.query(sql, [object], (err, data) => {
            console.log(data);
            callback(err, data)
        })

    }

}

module.exports = UserModel;

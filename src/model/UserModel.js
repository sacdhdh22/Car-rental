"use strict";
const mySqlConnection = require('../connector/mysqlconnection');

class UserModel {
    constructor(request) {
        this.request = request;
    }

    addUser(object, callback) {
        let sql = "insert into user SET ?";
        mySqlConnection.query(sql, [object], (err, data) => {
            console.log(data);
            callback(err, data)
        })

    }

}

module.exports = UserModel;


const lodash = require("lodash");
const async = require('async');


const BookingModel = require('../model/BookingModel');

class BookingService {
    constructor(request) {
        this.request = request;
        this.BookingModel = new BookingModel(request);
    }

    book(object, callback) {
        let self = this;
        console.log(object);

        async.waterfall([
            function(callback) {
                self.BookingModel.validateCarAvailability(object, (err, res) => {
                    if (err) {
                        return callback(err, null);
                    }
                    else {
                        return callback(null, res);
                    }
                })
            },
            function(data, callback) {
                console.log(data)
                if(data && data.length  > 0) {
                    return callback("This Car has been Booked!", null);
                }
                else {
                    let obj = self.createBookingObject(object, data);
                    self.BookingModel.book(obj, (err, res) => {
                        return callback(err, res);
                    })
                }
            }
        ], function(err, data) {
            if(err) {
                return callback(err);
            }
            else {
                return callback(null, data);
            }
        })
    }

    createBookingObject(object) {
        let obj = {
            fromDate : object.fromDate,
            toDate : object.toDate,
            fk_id_car_details : object.carId,
            fk_id_user : object.userId,
            active : true, 
            created_on : new Date(),
            updated_on : new Date()
        }
        return obj;
    }
    
}

module.exports = BookingService;
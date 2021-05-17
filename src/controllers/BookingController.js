
let lodash = require("lodash");
const BookingService = require('../service/BookingService');

class BookingController {
    constructor(request) {
        this.req = request;
        this.BookingService = new BookingService(request)
    }

    book(callback) {
        let self = this;
        let req = self.req;
        let object = lodash.get(req, "body", null);

        if (!object) {
            return callback("Invalid request!")
        }    
        if (object && !object.carId) {
            return callback("carId not passed!")
        }   
        if (object && (!object.toDate || !object.fromDate)) {
            return callback("Booking Date not passed!")
        }

        self.BookingService.book(object, (err, res) => {
            if (err) {
                return callback(err, null);
            }
            else {
                return callback(null, res);
            }
        })
    }
    
}

module.exports = BookingController;
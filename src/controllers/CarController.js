
let lodash = require("lodash");
const CarService = require('../service/CarService');

class CarController {
    constructor(request) {
        this.req = request;
        this.CarService = new CarService(request)
    }

    addCar(callback) {
        let self = this;
        let req = self.req;
        let object = lodash.get(req, "body", null);

        if (!object) {
            return callback("Invalid request!")
        }    
        if (object && !object.carLicenseNumber) {
            return callback("carLicenseNumber not passed!")
        }

        self.CarService.addCar(object, (err, res) => {
            if (err) {
                return callback(err, null);
            }
            else {
                return callback(null, res);
            }
        })
    }
    
}

module.exports = CarController;
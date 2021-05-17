
const lodash = require("lodash");
const async = require('async');


const CarModel = require('../model/CarModel');
const CarPriceModel = require('../model/CarPriceModel');

class CarService {
    constructor(request) {
        this.request = request;
        this.CarModel = new CarModel(request);
        this.CarPriceModel = new CarPriceModel(request);
    }

    addCar(object, callback) {
        let self = this;
        console.log(object);

        async.waterfall([
            function(callback) {
                let obj = self.createCarObject(object);
                self.CarModel.addCar(obj, (err, res) => {
                    if (err) {
                        return callback(err, null);
                    }
                    else {
                        return callback(null, res);
                    }
                })
            },
            function(data, callback) {
                if(data && data.insertId) {
                    let obj = self.createCarPriceObject(object, data);
                    self.CarPriceModel.addPrice(obj, (err, res) => {
                        if (err) {
                            return callback(err, null);
                        }
                        else {
                            return callback(null, res);
                        }
                    })
                }
                else {
                    return callback(err, data);
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

    createCarObject(object) {
        let obj = {
            carLicenseNumber : object.carLicenseNumber,
            model : object.model,
            manufacturer : object.manufacturer,
            model_version : object.model_version,
            active : true, 
            created_on : new Date(),
            updated_on : new Date()
        }
        return obj;
    }

    createCarPriceObject(object, data) {
        let obj = {
            base_price : object.base_price,
            security_deposit : object.security_deposit,
            php : object.php,
            fk_id_car_details : data.insertId,
            active : true, 
            created_on : new Date(),
            updated_on : new Date()
        }
        return obj;
    }
    
}

module.exports = CarService;
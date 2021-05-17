
let lodash = require("lodash");
const UserModel = require('../model/UserModel');

class UserService {
    constructor(request) {
        this.request = request;
        this.UserModel = new UserModel(request);
    }

    addUser(object, callback) {
        let self = this;
        let obj = self.createUserObject(object);
        console.log(obj)

        self.UserModel.addUser(object, (err, res) => {
            if (err) {
                return callback(err, null);
            }
            else {
                return callback(null, res);
            }
        })
    }

    createUserObject(object) {
        let obj = {
            name : object.name,
            mobile : object.mobile,
            active : true, 
            blocked : false,     
            created_on : new Date(),
            updated_on : new Date()
        }
        return obj;
    }
    
}

module.exports = UserService;
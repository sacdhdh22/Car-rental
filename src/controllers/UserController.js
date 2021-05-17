
let lodash = require("lodash");
const UserService = require('../service/UserService');

class UserController {
    constructor(request) {
        this.req = request;
        this.UserService = new UserService(request)
    }

    addUser(callback) {
        let self = this;
        let req = self.req;
        let object = lodash.get(req, "body", null);

        if (!object) {
            return callback("Invalid request!")
        }    
        if (object && !object.mobile) {
            return callback("mobile not passed!")
        }
        
        self.UserService.addUser(object, (err, res) => {
            if (err) {
                return callback(err, null);
            }
            else {
                return callback(null, res);
            }
        })
    }
    
}

module.exports = UserController;
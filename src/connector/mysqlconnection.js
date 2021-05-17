const mysql = require('mysql');






const connection = mysql.createConnection({
    host: "remotemysql.com",
    user: "",
    password: "",
    database: 'bDqfyvsI1X'
});


// connect to mysql
module.exports = {
  connect : function() {
    connection.connect(function(err) {
        if(err){
            console.log(err);
        }
        else {
            console.log("mysql connection established!");
        }
    });
},

query : function(sql, sqlParams, callback) {
    connection.query(sql, sqlParams, function(err, rows, fields) {

        console.log(rows, err, fields)
        if(err){
            callback(err)
            return;
        }

        callback(null, rows);
    });

}

}

  

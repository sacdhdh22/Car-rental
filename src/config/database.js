//Not done Idea was create a global keys and import connection string from .env files

module.exports = {
    mysql : {
        car_rental_read : process.env.MYSQL_Conn_STRING_Write || {},
        car_rental_write : process.env.MYSQL_Conn_STRING_Read || {}
    }
}
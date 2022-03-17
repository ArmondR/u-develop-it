// import mysql2 package
const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        //Your MySQL username,
        user: 'root',
        // Your MySQL password
        password: 'password',
        database: 'election'

    },
    console.log('Connection to the election database.')
);

module.exports = db;
// config/db.js
const mysql = require('mysql');

// Database credentials
const connection = mysql.createConnection({
    host: 'localhost', // Replace with your MySQL server host
    user: 'root', // Replace with your MySQL username
    password: '', // Replace with your MySQL password
    database: 'carpooling', // Replace with your MySQL database name
});
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }

    console.log('Connected to MySQL');
});

module.exports = connection;

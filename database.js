const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: '',
    password: '',
    database: ''
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database!');
});

module.exports = connection;
const mysql = require('mysql2');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Create a connection to the database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to the database and handle errors
db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err);
        process.exit(1); // Exit the app if there’s an error
    }
    console.log('Connected to the database');
});

module.exports = db; // Export the connection to use in other files

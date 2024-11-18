const db = require('./config/db'); // Import the database connection

// Test the database connection by querying for tables
db.query('SHOW TABLES', (err, results) => {
    if (err) {
        console.error('Error running query:', err); // Log any errors
    } else {
        console.log('Tables in the database:', results); // Log the tables
    }
    db.end(); // Close the connection after the query
});

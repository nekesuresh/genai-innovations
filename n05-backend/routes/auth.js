const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
const router = express.Router();

// Login route
router.post('/login', (req, res) => {
    const { username, password } = req.body; // Extract username and password from the request

    // Check if the user exists in the database
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' }); // Return a database error
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' }); // Return an error for invalid login
        }

        // Create a JWT token for the user
        const token = jwt.sign({ username }, process.env.JWT_SECRET, {
            expiresIn: '1h', // Token expires in 1 hour
        });

        res.json({ token }); // Send the token to the client
    });
});

module.exports = router;

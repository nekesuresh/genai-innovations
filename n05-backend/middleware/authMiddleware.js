const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]; // Extract the token from the Authorization header

    if (!token) {
        return res.status(401).json({ error: 'Access denied' }); // No token provided
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded; // Attach decoded token to the request
        next(); // Continue to the next middleware or route handler
    } catch (err) {
        res.status(403).json({ error: 'Invalid token' }); // Invalid or expired token
    }
};

module.exports = authMiddleware;

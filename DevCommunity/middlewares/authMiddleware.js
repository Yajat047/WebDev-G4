const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const authMiddleware = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'No token provided' });
    }

    const token = authorization.split(' ')[1];

    try {
        const userdata = jwt.verify(token, process.env.JWT_SECRET);
        
        if (!userdata || !userdata.userId) {
            return res.status(401).json({ message: 'Invalid token payload' });
        }

        // Save userId in request for later use
        req.userId = userdata.userId;

        console.log("Authenticated User ID:", req.userId);

        next();
    } catch (err) {
        console.error("JWT Error:", err.message);
        return res.status(401).json({ message: 'Unauthorized or invalid token' });
    }
};

module.exports = authMiddleware;
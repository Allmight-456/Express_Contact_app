const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

const validateTokenHandler = asyncHandler(async (req, res, next) => {
    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        try {
            token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

            // Attach the nested `user` object to the request
            req.user = decoded.user; 

            next();
        } catch (error) {
            res.status(401);
            throw new Error('Not authorized, invalid token');
        }
    } else {
        res.status(401);
        throw new Error('Not authorized, no token');
    }
});
module.exports = validateTokenHandler;

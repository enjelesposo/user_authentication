const jwt = require('jsonwebtoken');

// Middleware fuction: use to protect private servers
module.exports = function (req, res, next) {
    // check if has token
    const token = req.header('auth-token');
    if(!token) return res.status(401).send('Access Denied');

    // verify token
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    }
    catch(err) {
        res.status(400).send('Invalid Token');
    }
}
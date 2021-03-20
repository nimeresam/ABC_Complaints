const jwt = require('jsonwebtoken');

const users = new (require('./managers/users.manager'))();

const SECRET_KEY = 'PwC assignment';
const expiresIn = '14d';

/**
 * Used to create JWT Token based on username 
 * Called on login
 * @param {Object} payload object that contains username
 */
function createToken(payload) {
    return jwt.sign(payload, SECRET_KEY, { expiresIn });
}

/**
 * Used as express middleware to verify token
 * @param {Object} req http requrest body
 * @param {Object} res express res
 * @callback next express next function 
 */
function verifyToken(req, res, next) {
    // get request token
    var { authorization } = req.headers;
    // check if there's no authorization
    if (!authorization) return res.status(401).send();

    // check request token is verified or not
    jwt.verify(authorization.replace('Bearer ', ''), SECRET_KEY, function (err, decoded) {

        if (err) return res.status(401).send('Faild to authenticate token.');
        // set username property to be used 
        req.username = decoded.username;
        req.user_role = decoded.user_role;
        // continue request
        next();
    });
}


module.exports = {
    createToken, 
    verifyToken
};
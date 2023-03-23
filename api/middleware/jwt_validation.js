const jwt = require('jsonwebtoken');
const helpers = require('../helpers');

module.exports = {
    authenticateJWT(req, res, next) {
        const authHeader = req.headers.authorization;
        
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
                if (err) {
                    return res.status(401).json(helpers.rest_error("Authentication failed, please login to continue", {}));
                }
    
                req.user = user;
                next();
            });
        } else {
            return res.status(401).json(helpers.rest_error("Authentication failed, please login to continue", {}));
        }
    }
   
}
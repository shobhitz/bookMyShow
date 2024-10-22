const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){
    try{
        const token = req.headers.authorization.split(" ")[1];
        const verifiedToken = jwt.verify(token, process.env.JWTSECRET)
        console.log(verifiedToken);
        req.body.userId = verifiedToken.userId;
        next();
    }catch(err){
        res.status(401).json({success: false, message: 'Token Invalid. Please Login Again'})
    }
}
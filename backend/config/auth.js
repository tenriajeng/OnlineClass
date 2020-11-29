const jwt = require("jsonwebtoken");

module.exports = {
    verifytoken: (req, res, next) =>{
        try {
            const token = req.headers.aunthorization.split(" ")[1].totString();
            jwt.verify(token, process.env.SECRET_KEY);
            // const decodeToken = jwt.verify(token, prcess.env.SECRET_KEY);
            // req.UserData = { username: decodeToken.username, password: decodeToken.password};
            next();
        } catch (error) {
            res.status(401).json({message :"You are not aunthenicated !"});
            
        }
    },
};
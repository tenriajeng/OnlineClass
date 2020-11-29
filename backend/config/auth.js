const jwt = require("jsonwebtoken");

module.exports = {
    verifyAdminPemateri: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1].toString();
            const adminpemateri = jwt.verify(token, "process.env.SECRET_KEY");
            // console.log(adminpemateri.response.level);
            if (
                adminpemateri.response.level == 1 ||
                adminpemateri.response.level == 3
            ) {
                next();
            } else {
                res.status(401).json({message: "You are not authenticated"});
            }
        } catch (error) {
            res.status(401).json({message: "You are not authenticated"});
        }
    },
    verifyUserPemateri: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1].toString();
            const userpemateri = jwt.verify(token, "process.env.SECRET_KEY");
            // console.log(userpemateri.response.level);
            if (
                userpemateri.response.level == 2 ||
                userpemateri.response.level == 3
            ) {
                next();
            } else {
                res.status(401).json({message: "You are not authenticated"});
            }
        } catch (error) {
            res.status(401).json({message: "You are not authenticated"});
        }
    },
    verifyAdmin: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1].toString();
            const admin = jwt.verify(token, "process.env.SECRET_KEY");

            // console.log(admin.response.level);
            if (admin.response.level == 1) {
                next();
            } else {
                res.status(401).json({message: "You are not authenticated"});
            }
        } catch (error) {
            res.status(401).json({message: "You are not authenticated"});
        }
    },

    verifyUser: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1].toString();
            const user = jwt.verify(token, "process.env.SECRET_KEY");

            // console.log(admin.response.level);
            if (user.response.level == 2) {
                next();
            } else {
                res.status(401).json({message: "You are not authenticated"});
            }
        } catch (error) {
            res.status(401).json({message: "You are not authenticated"});
        }
    },
    verifyPemateri: (req, res, next) => {
        try {
            const token = req.headers.authorization.split(" ")[1].toString();
            const pemateri = jwt.verify(token, "process.env.SECRET_KEY");

            // console.log(admin.response.level);
            if (pemateri.response.level == 3) {
                next();
            } else {
                res.status(401).json({message: "You are not authenticated"});
            }
        } catch (error) {
            res.status(401).json({message: "You are not authenticated"});
        }
    },
};

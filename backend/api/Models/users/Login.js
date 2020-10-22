const db = require("../../../config/db.js");

module.exports = {
    loginUser: (body) => {
        return new Promise((resolve, reject) => {
            db.query(
                "SELECT * FROM users WHERE email= ? AND password= ? AND deleted_at IS NULL",
                [body.email,body.password],
                (err, response) => {
                    if (!err) {
                        if(response.length  === 1)
                            resolve(response);
                         else 
                            {
                                const fail = "user tidak ada";
                                resolve(fail);
                            }
                    } else {
                        reject(err);
                    }
                }
            );
        });
    },
};
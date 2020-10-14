const db = require("../../../config/db.js");

module.exports = {

UserRegister: (body) => {
    return new Promise((resolve, reject) => {
      db.query("INSERT INTO users SET ?", [body], (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
};
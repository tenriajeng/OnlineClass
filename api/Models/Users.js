const db = require("../../config/db.js");

module.exports = {
  showAllUser: () => {
    return new Promise((resolve, reject) => {
      db.query("SELECT * FROM users", (err, response) => {
        if (!err) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  },
};

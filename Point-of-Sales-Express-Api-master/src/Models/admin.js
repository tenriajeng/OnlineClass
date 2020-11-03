const db = require("../Configs/db");

module.exports = {
  loginAdmin: username => {
    return new Promise((resolve, reject) => {
      const query = `SELECT * FROM admin WHERE username = ?  `;
      db.query(query, [username], (err, result) => {
        if (!err) {
          resolve(result);
        } else {
          reject(err);
        }
      });
    });
  }
};

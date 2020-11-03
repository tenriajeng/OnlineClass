const adminModel = require("../Models/admin");
const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");

module.exports = {
  loginAdmin: async (req, res, next) => {
    try {
      const { username, password } = req.body;
      await adminModel
        .loginAdmin(username)
        .then(response => {
          if (response.length === 0) {
            res.status(400).json({
              message: `Username ${username} Not Found`
            });
          } else {
            // if (bcrypt.compareSync(password, response[0].password)) {
            if ((password, response[0].password)) {
              let token = jwt.sign(
                { response: response[0] }, //level: "user"
                process.env.SECRET_KEY,
                { expiresIn: "60m" }
              );
              res.json({
                sucess: true,
                err: null,
                token
              });
              // res.send(token);
              console.log({ msg: "berhasil login" });
            } else {
              res.status(400).json({
                message: "Wrong password or Email"
              });
            }
          }
        })
        .catch(err => {
          res.json(err);
        });
    } catch (err) {
      next(err);
    }
  }
};

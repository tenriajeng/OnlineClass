const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: 'aderyan',
  api_key: '127277574194924',
  api_secret: 'Obg90u_-yd5PHp0WAYIPGzzOJ_I'

});

module.exports = cloudinary;
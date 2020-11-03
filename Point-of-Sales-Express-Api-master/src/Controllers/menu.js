const menuModel = require("../Models/menu");
const formRes = require("../Helpers/formRes.js");
const upload = require("../Configs/multer");
const cloudinary = require("../Configs/cloudinary");

module.exports = {
  getMenu: (req, res) => {
    menuModel
      .getMenu()
      .then(response => formRes.getMenu(res, response, 200))
      .catch(err => console.log(err));
  },
  postMenu: (req, res) => {
    var date = new Date();
    upload.single("img")(req, res, async err => {
      if (err) {
        res.json({ msg: err });
      } else {
        if (req.file == undefined) {
          // res.json({
          //   msg: "No File Selected"
          // });
          const body = {
            ...req.body,
            created_at: date,
            updated_at: date
          };
          // console.log(body)
          menuModel
            .postMenu(body)
            .then(response => formRes.postMenu(res, response, 200))
            .catch(err => console.log(err));
        } else {
          try {
            cloudinary.uploader
              .upload(req.file.path, { folder: "POS-IMG" })
              .then(result => {
                const body = {
                  ...req.body,
                  created_at: date,
                  updated_at: date,
                  img: result.url
                };
                menuModel
                  .postMenu(body)
                  .then(response => formRes.postMenu(res, response, 200))
                  .catch(err => console.log(err));
              });
          } catch (err) {
            res.json({
              err
            });
          }
        }
      }
    });
  },

  updateMenu: (req, res) => {
    var date = new Date();
    const id = req.params.id;
    const body = {
      ...req.body,
      updated_at: date
    };
    console.log(body);
    menuModel
      .updateMenu(body, id)
      .then(response => formRes.updateMenu(res, response, 200))
      .catch(err => console.log(err));
  },

  updateMenuImg: (req, res) => {
    const id = req.params.id;
    var date = new Date();
    upload.single("img")(req, res, async err => {
      if (err) {
        res.json({ msg: err });
      } else {
        if (req.file == undefined) {
          const body = {
            ...req.body,
            updated_at: date
          };
          // console.log("body tdk upload", body);
          menuModel
            .updateMenuImg(body, id)
            .then(response => formRes.updateMenuImg(res, response, 200))
            .catch(err => console.log(err));
        } else {
          try {
            cloudinary.uploader
              .upload(req.file.path, { folder: "POS-IMG" })
              .then(result => {
                const body = {
                  ...req.body,
                  updated_at: date,
                  img: result.url
                };
                // console.log("body upload", body);
                menuModel
                  .updateMenuImg(body, id)
                  .then(response => formRes.updateMenuImg(res, response, 200))
                  .catch(err => console.log(err));
              });
          } catch (err) {
            res.json({
              err
            });
          }
        }
      }
    });
  },

  deleteMenu: (req, res) => {
    const id = req.params.id;
    menuModel
      .deleteMenu(id)
      .then(response => formRes.deleteMenu(res, response, 200))
      .catch(err => console.log(err));
  }
};

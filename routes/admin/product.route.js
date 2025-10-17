const express = require("express");
const multer = require("multer");
// const cloudinary = require("cloudinary").v2;
// const streamifier = require("streamifier");
const router = express.Router();


// const storageMulter = require("../../helpers/storageMulter");
// const upload = multer({ storage: storageMulter() });
const upload = multer();

const uploadCloud= require("../../middlewares/admin/uploadCloud.middleware")
const controller = require("../../controllers/admin/product.controller");
const validate = require("../../validates/admin/product.validate");

// router.get("/" , (reg, res) => {
//     res.render("client/pages/home/index.pug");
// });

router.get("/", controller.index);


// b22 - 1:01:40
router.patch("/change-status/:status/:id", controller.changeStatus);

router.patch("/change-multi", controller.changeMulti);

router.delete("/delete/:id", controller.deleteItem);

router.get("/create", controller.create);
router.post(
    "/create",
    upload.single("thumbnail"),
    uploadCloud.upload,
    validate.createPost,
    controller.createPost
);



router.get("/edit/:id", controller.edit);
router.patch("/edit/:id", upload.single("thumbnail"),    uploadCloud.upload, validate.createPost, controller.editPatch);

router.get("/detail/:id", controller.detail);


module.exports = router;
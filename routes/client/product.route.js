const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/product.controller");


// router.get("/" , (reg, res) => {
//     res.render("client/pages/products/index.pug");
// });

router.get("/" , controller.index);
router.get("/:slug" , controller.detail);
module.exports = router;
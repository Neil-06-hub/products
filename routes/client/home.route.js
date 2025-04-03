const express = require("express");
const router = express.Router();

const controller = require("../../controllers/client/home.controller");

// router.get("/" , (reg, res) => {
//     res.render("client/pages/home/index.pug");
// });

router.get("/" , controller.index );

module.exports = router;
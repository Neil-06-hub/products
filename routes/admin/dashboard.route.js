const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/dashboard.controller");

// router.get("/" , (reg, res) => {
//     res.render("client/pages/home/index.pug");
// });

router.get("/" ,controller.dashboard );

module.exports = router;
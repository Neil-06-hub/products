const Account = require("../../models/account.model");
const Role = require("../../models/role.model");

const systemConfig = require("../../config/systems.js");

const md5 = require('md5');

// [GET] /admin/my-account
module.exports.index = (req, res) => {
    res.render("admin/pages/my-account/index.pug",{
        pageTitle: "Thông tin cá nhân",
    });
}


// [GET] /admin/my-account/edit
module.exports.edit = (req, res) => {
    res.render("admin/pages/my-account/edit.pug", {
        pageTitle: "Thông tin cá nhân",
       
    });
};


// [PATCH] /admin/my-account/edit
module.exports.editPatch = async (req, res) => {
    const id = res.locals.user.id;
    const emailExist = await Account.findOne({
        _id: { $ne: id},
        email: req.body.email,
        deleted: false
    });

    if (emailExist) {
        req.flash("error", "Email đã tồn tại!");

    } else {
        if (req.body.password) {
            req.body.password = md5(req.body.password);
        } else {
            delete req.body.password
        }

        await Account.updateOne({ _id: id }, req.body);
        req.flash("success", "Cap nhat thanh cong");
    }


    res.redirect("back");
};

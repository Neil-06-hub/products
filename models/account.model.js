const mongoose = require("mongoose");
const generate = require("../helpers/generate.js")

const accountSchema = new mongoose.Schema(
    {
        fullName: String,
        email: String,
        password: String,
        token: {
            type: String,
            default: generate.generateRandomString(20)
        },
        phone: String,
        avatar: String,
        role_id: String,
        status: String,
        deleted: {
            type: Boolean,
            default: false
        },
        deleteAt: Date
    },{
        timestamps: true
    });

const Account = mongoose.model("Account", accountSchema, "accounts");
// tham so 2 la tu dat
// tham so 3 la ten bang trong MongoDB dat

module.exports = Account;
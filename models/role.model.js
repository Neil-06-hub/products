const mongoose = require("mongoose");




const roleSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        permissions: {
            type: Array,
            default: ["Thêm sản phẩm" , "Xoá sản phẩm"]
        },
        deleted: {
            type: Boolean,
            default: false
        },
        deleteAt: Date
    },{
        timestamps: true
    });

const Role = mongoose.model("Role", roleSchema, "roles");
// tham so 2 la tu dat
// tham so 3 la ten bang trong MongoDB dat

module.exports = Role;
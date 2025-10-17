const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const productCategorySchema = new mongoose.Schema(
    {
        title: String,
        parent_id: {
            type: String,
            default: "",
        },
        description: String,
        thumbnail: String,
        status: String,
        position: Number,
        slug: {
            type: String,
            slug: "title",
            unique: true
        },
        deleted: {
            type: Boolean,
            default: false
        },
        deleteAt: Date
    },{
        timestamps: true
    });

const ProductCategory = mongoose.model("ProductCategory", productCategorySchema, "products-category");
// tham so 2 la tu dat
// tham so 3 la ten bang trong MongoDB dat

module.exports = ProductCategory;
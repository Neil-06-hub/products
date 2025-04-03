const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug);

const productSchema = new mongoose.Schema(
    {
        title: String,
        description: String,
        price: Number,
        discountPercentage: Number,
        stock: Number,
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

const Product = mongoose.model("Product", productSchema, "products");
// tham so 2 la tu dat
// tham so 3 la ten bang trong MongoDB dat

module.exports = Product;
const Product = require("../../models/product.mode")
const productsHelper = require("../../helpers/product")
// [GET] /products
module.exports.index = async (req, res) => {
  // Lấy ra sản phẩm nổi bật 
  const productsFeatured = await Product.find({
      featured: "1",
      status: "active",
      deleted: false,
    }).limit(6);
  
    const newProductsFeatured = productsHelper.priceNewProducts(productsFeatured);
  // END Lấy ra sản phẩm nổi bật 

  // Hiển thị đnah sách sản phẩm mới nhất
  const productsNew = await Product.find({
    status: "active",
    deleted: false,
  }).sort({position: "desc"}).limit(6);

  const newProductsNew = productsHelper.priceNewProducts(productsNew);

   // End Hiển thị đnah sách sản phẩm mới nhất
    res.render("client/pages/home/index", {
      pageTitle: "Trang chủ",
      productsFeatured: newProductsFeatured,
      productsNew: newProductsNew

    });
  };
  
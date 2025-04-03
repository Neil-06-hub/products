const productRoutes = require("./product.route");
const homeRoutes = require("./home.route");


module.exports = (app) =>{
    // app.get("/" , (reg, res) => {
    //     res.render("client/pages/home/index.pug");
    // });
    app.use("/" , homeRoutes) ;
    // app.get("/products" , (reg, res) => {
    //     res.render("client/pages/products/index.pug");
    // });

    // chuyen sang file produc.route.js

    app.use("/products", productRoutes);
}
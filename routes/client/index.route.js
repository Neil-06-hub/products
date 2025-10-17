const productRoutes = require("./product.route");
const homeRoutes = require("./home.route");
const searchRoutes = require("./search.route");
const cartRoutes = require("./cart.route");
const categoryMiddleware = require("../../middlewares/client/category.middleware")
const cartMiddleware = require("../../middlewares/client/cart.middleware")
const userMiddleware = require("../../middlewares/client/user.middleware")
const settingMiddleware = require("../../middlewares/client/setting.middleware")


const checkoutRoutes = require("./checkout.route")
const userRoutes = require("./user.route")


module.exports = (app) => {
    app.use(categoryMiddleware.category); // 1:50:40 - B34
    app.use(cartMiddleware.cartId); // 41:15 - B36
    app.use(userMiddleware.infoUser); // 1:19:53 Bai 38
    app.use(settingMiddleware.settingGeneral);

    app.use("/", homeRoutes);
    app.use("/products", productRoutes);
    app.use("/search", searchRoutes);
    app.use("/cart", cartRoutes);
    app.use("/checkout", checkoutRoutes);
    app.use("/user", userRoutes);
}
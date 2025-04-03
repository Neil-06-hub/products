const express = require("express");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const flash = require("express-flash");
const cookieParser = require("cookie-parser");
const session = require("express-session");


require("dotenv").config();

const database = require("./config/database");
database.connect();
// const mongoose = require("mongoose");
// mongoose.connect(process.env.MONGO_URL);

const route = require("./routes/client/index.route");
const routeAdmin = require("./routes/admin/index.route");

const systemConfig = require("./config/systems")
const app = express();
// const port = 3000;
const port = process.env.PORT;

app.use(methodOverride("_method"));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// cai dat pug vao du an
app.set("views", `${__dirname}/views`);
// app.set("views", "./views");
app.set("view engine", "pug");

// Flash
app.use(cookieParser("keyboard cat"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());
// End Flash


app.locals.prefixAdmin = systemConfig.prefixAdmin;


// app.use(express.static("public"));
app.use(express.static(`${__dirname}/public`));



// app.get("/" , (reg, res) => {
//     res.render("client/pages/home/index.pug");
// });

// app.get("/products" , (reg, res) => {
//     res.render("client/pages/products/index.pug");
// });
route(app);   // thay ham nay voi 2 cau lenh tren
routeAdmin(app);

app.listen(port, ()=> {
    console.log(`App listening on port ${port}`);
});
 

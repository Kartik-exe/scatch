const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const expressSession = require("express-session");
const flash = require("connect-flash");

const ownerRouters = require("./routes/ownerRouters");
const userRouters = require("./routes/userRouters");
const indexRouters = require("./routes/index");
const productRouters = require("./routes/productRouters");

// For the jsonwebtoken!
require("dotenv").config();  

const db = require("./config/mongoose-connections");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// middleware express Session
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.Express_SESSION_SECRET || "default-secret-key",
    })
);
app.use(flash());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/", indexRouters);
app.use("/owner", ownerRouters);
app.use("/user", userRouters);
app.use("/product", productRouters);
app.listen(3000);

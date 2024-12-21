const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const path = require("path");
const ownerRouters = require("./routes/ownerRouters");
const userRouters = require("./routes/userRouters");
const productRouters = require("./routes/productRouters");

const db = require("./config/mongoose-connections");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.use("/owner", ownerRouters);
app.use("/user", userRouters);
app.use("/product", productRouters);
app.listen(3000); 
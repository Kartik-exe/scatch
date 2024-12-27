const express = require("express");
const router = express.Router();
const isloggedin = require("../middleware/isLoggedIn");

router.get("/", function (req, res){
    let error = req.flash("error");
    res.render("index", {error});
});

router.get("/shop", isloggedin, function(req, res){
    res,semd("shop");
});

module.exports = router;
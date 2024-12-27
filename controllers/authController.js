// const express = require('express');
// const userModel = require("../models/user-model")
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const { genrateToken } = require("../utils/genrateToken");

// module.exports.registerUser = async function (req, res){
//             try{
//                 let { fullname, email, password } = req.body;

//                 let user = await userModel.findOne({email: email});
//                 if (user) return
//                 res.status (201).send("You already have an account, please login");
    
//                 bcrypt.genSalt(10, function(err, salt){
//                     bcrypt.hash(password, salt, async function(err, hash){
//                         if(err) 
//                             return res.send(err.message);
//                         else{
//                             let user = await userModel.create({
//                                 fullname,
//                                 email,  
//                                 password: hash,
//                             });
//                             let token = genrateToken(user);
//                             res.cookie("token", token);
//                             // res.send(token);
//                             res.send("User created successfully");
//                             // res.status(201)  
//                             // .json(user);
//                         }
//                     });
//                 });
//             }
//             catch (err) {
//                 console.error("Error occurred:", err);
//                 // res.status(500).send("An error occurred.");
//             }
//         };

// set NODE_ENV=development
// npx nodemon app.js

const express = require("express");
const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const { genrateToken } = require("../utils/genrateToken");

module.exports.registerUser = async function (req, res) {
    try {
        const { fullname, email, password } = req.body;

        // Check if user already exists
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            return res.status(201).send("You already have an account, please login");
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const user = await userModel.create({
            fullname,
            email,
            password: hashedPassword,
        });

        // Generate token
        const token = genrateToken(user);

        // Set cookie and respond
        res.cookie("token", token, { httpOnly: true });
        res.status(201).send("User created successfully");
    } catch (err) {
        console.error("Error occurred:", err);
        res.status(500).send("An error occurred.");
    }
};

module.exports.loginUser = async function (req, res){

    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) return res.send("Email or Password incorrect");

    bcrypt.compare(password, user.password, function(err, result){
        if (result){
            const token = genrateToken(user);
            res.cookie("token",token);
            res.send("you can login");
        }
        else{
            res.send("Email or Password incorrect");
        }
    });
};

module.exports.logout = function (req, res){
    res.cookies("token", "");
    res.redirect("/");
};
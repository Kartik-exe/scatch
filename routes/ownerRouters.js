// const express = require('express');
// const router = express.Router();
// const ownerModel = require("../models/owner-model");
// router.use(express.json());

// if(process.env.NODE_ENV === "development"){
//     router.post("/owner/create", async function (req, res){
//         let owner = await ownerModel.find();
//         if(owner.length > 0){
//             return res
//             // .status(500)
//             .send(503)
//             .send("You don't have permission to create new owner.")
//         }

//         let { fullname, email, password } = req.body; 

//         let CreatedOwner = await ownerModel.create({
//             fullname,
//             email,
//             password,
//         })
//         res.status(201).send("CreatedOwner");

//         req.send("We can create owner");
//     });
// }

// router.get("/", function (req, res){
//     res.send("hey it's working");
// });


// module.exports = router;


// CHAT GPT CODE

// const express = require('express');
// const app = express();
// const router = express.Router();
// const ownerModel = require("../models/owner-model");

// // Middleware to parse JSON body
// router.use(express.json());

// if (process.env.NODE_ENV === "development") {
//     router.post("/create", async function (req, res) {
//         try {
//             // Check if any owner already exists
//             let owner = await ownerModel.find();
//             if (owner.length > 0) {
//                 return res
//                     .send(503) // Using 403 Forbidden as the user doesn't have permission
//                     .send("You don't have permission to create a new owner.");
//             }

//             // Destructure the data from request body
//             let { fullname, email, password } = req.body;

//             // Create a new owner
//             let CreatedOwner = await ownerModel.create({
//                 fullname,
//                 email,
//                 password,
//             });

//             // Respond with the created owner's details
//             res.status(201).json(CreatedOwner);
//         } catch (err) {
//             console.error("Error occurred:", err);
//             res.status(500).send("An error occurred.");
//         }
//     });
// }

// router.get("/", function (req, res) {
//     res.send("hey it's working");
// });

// module.exports = router;


// Use this to run app:

// set NODE_ENV=development&& node app.js



const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

router.use(express.json());

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function (req, res) {
        try {
            const { fullname, email, password } = req.body;

            // Check if an owner with the same email already exists
            // const existingOwner = await ownerModel.findOne({ email });
            // if (existingOwner) {
            //     return res.status(409).send("An owner with this email already exists.");
            // }

            // Create a new owner if no match is found
            const CreatedOwner = await ownerModel.create({
                fullname,
                email,
                password,
            });
            // You change status to 500,5003,504  
            // 201 is for final creation

            res.status(201)  
            .json(CreatedOwner);
        } 
        catch (err) {
            console.error("Error occurred:", err);
            res.status(500).send("An error occurred.");
        }
    });
}

router.get("/", function (req, res) {
    res.send("hey it's working");
});

module.exports = router;

// set NODE_ENV=development
// npx nodemon app.js

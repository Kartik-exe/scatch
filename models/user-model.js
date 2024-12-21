const mongoose = require('mongoose');


const userSchema = mongoose.Schema({

    // for array we can use:
    // cart: []

    fullname: String,
    email: String,
    email: String,
    password: String,
    cart: {
        type: Array,
        default: []
    },
    isadmin: Boolean,
    orders: {
        type: Array,
        default: [],
    },
    order: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
});

module.exports = mongoose.model("user", userSchema);

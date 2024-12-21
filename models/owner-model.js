const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1.:27017/scatch");

const ownerSchema = mongoose.Schema({

    fullname: {
        type: String,
        minlenght: 3,
        trim: true,
    },
    email: String,
    password: String,
    products: {
        type: Array,
        default: [],
    },
    order: {
        type: Array,
        default: [],
    },
    picture: String,
    gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);

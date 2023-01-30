const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    // usernme: {
    //     type: String,
    //     requried : true
    // },
    password: {
        type: String,
        required: true
    },
    worker: {
        type: Boolean,
        default: false
    },
    // birth_data: {
    //     type: String,
    //     required: true
    // },
    verified: {
        type: Boolean,
        default: false
    }

})

module.exports = User = new mongoose.model("user",userSchema);
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required : true
    },
    email: {
        type: String,
        required : true,
    },
    usernme: {
        type: String,
        requried : true
    },
    password: {
        type: String,
        required : true
    },
    type: {
        type: String,
        required: true
    },
    birth_data: {
        type: String,
        required: true
    }
})

module.exports = User = new mongoose.Collection(user,userSchema);
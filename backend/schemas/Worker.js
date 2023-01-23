const mongoose = require("mongoose");

const workerSchema = new mongoose.Schema({
    email: {
        type: String,
        required : true,
    },
    occupations: [{
        occupation: {
            type: {
                type: String,
                required: true
            },
            rating: {
                type: Number,
                default: 0,
            },
        }
    }
    ],
    work_history: [{
        job: {   
            customer: {
                type: String,
                //required: true 
            },
            amount: {
                type: Number,
                //required: true,
            },
            rating: {
                type: Number,
            },
            feedback: {
                type: String,
            },
            creation_date: {
                type: Date,
                //required: true
            },
            completion_date: {
                type: Date,
            },
        }
    }
    ],
    rating: {
        type: Number,
        default: 0,
    },
    verified: {
        type: Boolean,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

module.exports = Worker = new mongoose.Collection(worker,workerSchema);
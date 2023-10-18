const mongoose = require('mongoose')
const User = require('./userSchema')

const threadSchema = new mongoose.Schema({
    tag: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    usefulness:{
        upvotes:Number,
        downvotes:Number
    }
})


const Thread = new mongoose.model("Thread",threadSchema);

module.exports = Thread;
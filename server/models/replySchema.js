const mongoose = require('mongoose')
const User = require('./userSchema')
const Thread = require('./threadSchema')

const replySchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    thread: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Thread',
    },
    usefulness:{
        upvotes:Number,
        downvotes:Number
    }
})


const Reply = new mongoose.model("Reply",replySchema);

module.exports = Reply;
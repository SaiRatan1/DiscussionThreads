const mongoose = require("mongoose");
const { Schema } = mongoose;
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({

  name:String,
  dob:{
    type: Date,
    required: true,
  },
  year:{
    type: String,
    required: true,
  },
  branch:{
    type: String,
    required: true,
  },
  section:{
    type: String,
    required: true,
  },
  email: {
    type:String,
    required:true,
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
  },
  tokens: [
    {
      token: String,
    },
  ]
});

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.DISCUSSIONTHREADS);

    this.tokens = this.tokens.concat({ token: token });

    await this.save();
    return token;
  } catch (err) {
    console.log(err);
  }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type:String, required: [true, "Name is mandatory"]},
    email: {type: String, required:[true, "Email is mandatory"], unique: [true, "Email should be unique"]},
    password:{type: String, required: [true, "Password is mandatory"]},
    role: {type: String, enum:["admin", "user", "partner"], required:true, default:"user"},
}, {timestamps: true})

const User = mongoose.model("user", userSchema);

module.exports = User
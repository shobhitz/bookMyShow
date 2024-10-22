const router = require('express').Router()
const User = require("../model/userModel");
const bcrypt = require("bcryptjs");
const authMiddleware = require('../middlewares/authMiddleware');
const jwt = require('jsonwebtoken');

router.post("/register", async(req, res) => {
    try{
        const {email} = req.body
        const userExists = await User.findOne({email: email});

        if(userExists){
            return res.status(403).json({success: false, message: "User with that email exists"})
        }
        const newUser = new User(req.body)
        await newUser.save();
        res.status(201).json({success: true, message: "User Successfully added", user: newUser})
        // send a mail to verify email
    }catch(err){
        res.status(500).json({message: "Internal Server Error", additionalError: err.message})
    }
})


router.post("/login", async(req, res) => {
    try{
        const {email, password} = req.body
        const userExists = await User.findOne({email: email});

        if(!userExists){
            return res.status(400).json({success: false, message: "User does not exists. Please Register"})
        }

        if(password !== userExists.password){    
            return res.status(400).json({success: false, message: "Invalid Credentials"})
        }

        const token = jwt.sign({userId: userExists._id}, process.env.JWTSECRET, {"expiresIn": "1d" })
        console.log(token);
        return res.status(200).json({success: true, message: "Login Successful", data: token})
        // send a mail to verify email
    }catch(err){
        res.status(500).json({message: "An error has occured, please try again later.", additionalError: err.message})
    }
})

router.get("/current", authMiddleware, async(req,res) => {
    const id = req.body.userId;
    const user = await User.findById(id).select("-password")
    res.send({
        success: true,
        message: "You are Authorized",
        data: user
    })
})

module.exports = router;
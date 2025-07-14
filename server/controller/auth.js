const User = require("../models/Users.js");
const { OAuth2Client } = require("google-auth-library");
const createToken = require("./browserJwt.js");
const bcrypt = require('bcrypt')

const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const signup = async (req, res) => {
  try {
    const { name, email, password, confirmpassword } = req.body;
    if (password != confirmpassword) {
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const existingUser = await User.findOne({ email }); 
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new User({ name, email, password }); 
    await newUser.save();
    if(newUser){
     res.createToken(newUser._id,res).status(200).json({ message: "New user created" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error" });
  }
};
const login= async (req,res)=>{
  const{email,password}=req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    createToken(user._id, res);
    res.status(200).json({ message: "User Logged in Successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
const logout =(req,res)=>{
  try {
    res.clearCookie('jwt');
      res.status(201).json({message:"User Logged Out Succesfully!"})

  } catch (error) {
  console.log(error);
  res.status(500).json({message:"Server Error"});
  
  }
}
module.exports = {signup,login,logout}; 

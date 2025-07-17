const User = require("../models/Users.js");

const getUserProfile = async (req,res) => {
    try {
    const loggedInUser=req.User;
    const allUser=await User.find({_id:{$ne:loggedInUser}}).select("-password");
    res.status(201).json({allUser});
    } catch (error) {
        console.log("error in allUser Conttoller "+ error);
        res.status(500).json({message:"Sever error"});

    }
    
}
module.exports=getUserProfile;
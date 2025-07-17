const jwt= require('jsonwebtoken')
const User = require('../models/Users'); // Adjust path to your model

const secureRoutes=async (req,res,next) => {
    
    try {
        const token=req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Invalid Token"});
        }
        const verfied=jwt.verify(token,process.env.JWT_TOKEN);
        if(!verfied){
            return res.status(403).json({message:"Invalid error"});
        }
        const user = await User.findById(verfied.userId).select("-password");
        
        if(!user){
            return res.status(404).json({message:"User not found"});
        }
        req.user=user;
        next();

    } catch (error) {
        console.log(error);
        
    }
};
module.exports=secureRoutes;
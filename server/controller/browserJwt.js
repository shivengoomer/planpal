const jwt=require('jsonwebtoken')
const createToken=(userId,res)=>{
    const token= jwt.sign({userId},process.env.JWT_TOKEN,{expiresIn:"5d"});
    res.cookie(
        "jwt",token,{
            httpOnly:true,
            secure:true,
            sameSite:"strict"

        }
    )
}
module.exports=createToken;
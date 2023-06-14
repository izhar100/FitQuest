const jwt=require("jsonwebtoken")
require("dotenv").config()
const adminAuth=(req,res,next)=>{
    const token=req.headers.authorization?.split(" ")[1]
    if(token){
        try {
           const decoded=jwt.verify(token,process.env.secretKey)
           if(decoded){
            if(decoded.user.email=="admin@gmail.com"){
              next()
            }else{
              res.status(400).json({msg:"Only admin is Authorized on this page"}) 
            }
           }else{
            res.status(400).json({msg:"Not Authorized!!!"})
           }
        } catch (error) {
           res.status(400).json({error:error.message})
        }
    }else{
        res.status(400).json({msg:"Please Login First!"})
    }
}

module.exports={
    adminAuth
}
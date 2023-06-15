const express=require("express")
require("dotenv").config()
const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")
const { UserModel } = require("../models/user.model")
const { userAuth } = require("../middleware/userAuth.middleware")
const userRouter=express.Router()

userRouter.post("/register",async(req,res)=>{
    const {firstName,lastName,email,password,location,age}=req.body
    try {
        const user=await UserModel.findOne({email})
        if(user){
            return res.status(400).json({error:'user already exists please login'})
        }
        bcrypt.hash(password, 5,async(err, hash)=>{
            // Store hash in your password DB.
            if(err){
                res.status(400).json({error:err})
            }else{
                const newUser=new UserModel({firstName,lastName,email,password:hash,location,age})
                await newUser.save()
                res.status(200).json({msg:'Account created successfully',user:req.body})
            }
        })

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    try {
        const user=await UserModel.findOne({email})
        if(user){
            bcrypt.compare(password, user.password,(err, result)=>{
                // result == true
                if(result){
                    const token=jwt.sign({user:user},process.env.secretKey)
                    res.status(200).json({msg:"Login Success",user:user,token:token})
                }else{
                    res.status(400).json({error:err}) 
                }
            })
        }else{
            res.status(400).json({msg:"user not found please create signup"}) 
        }
    } catch (error) {
        res.status(400).json({error:error.message}) 
    }
})

userRouter.patch("/update/:id",userAuth,async(req,res)=>{
    const userID=req.body.userID
    const id=req.params.id
    try {
        if(id==userID){
            await UserModel.findByIdAndUpdate({_id:id},{...req.body})
            res.status(200).json({msg:`Account updated`})
        }else{
            res.status(400).json({error:"Not Authorized"})
        }

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

module.exports={
    userRouter
}
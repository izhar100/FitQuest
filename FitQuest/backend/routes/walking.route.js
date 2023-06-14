const express=require('express')
const { WalkingModel } = require('../models/walking.model')
const { adminAuth } = require('../middleware/adminAuth.middleware')
const walkingRoute=express.Router()

walkingRoute.get("/",async(req,res)=>{
    try {
        const walking=await WalkingModel.find()
        res.status(200).json({walking:walking})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

walkingRoute.use(adminAuth)

walkingRoute.post("/create",async(req,res)=>{
    try {
        const walking=new WalkingModel(req.body)
        await walking.save()
        res.status(200).json({msg:"new walking workout created",walking:walking})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

walkingRoute.patch("/update/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const running=await WalkingModel.findOne({_id:id})
        await WalkingModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).json({msg:`${running.title} updated`})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

walkingRoute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try {
        const running=await WalkingModel.findOne({_id:id})
        await WalkingModel.findByIdAndDelete({_id:id})
        res.status(200).json({msg:`${running.title} deleted`})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports={
    walkingRoute
}
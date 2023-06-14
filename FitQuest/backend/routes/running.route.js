const express=require('express')
const { RunningModel } = require('../models/running.model')
const { adminAuth } = require('../middleware/adminAuth.middleware')
const runningRoute=express.Router()

runningRoute.get("/",async(req,res)=>{
    try {
        const running=await RunningModel.find()
        res.status(200).json({running:running})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

runningRoute.use(adminAuth)

runningRoute.post("/create",async(req,res)=>{
    try {
        const running=new RunningModel(req.body)
        await running.save()
        res.status(200).json({msg:"new running workout created",running:running})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

runningRoute.patch("/update/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const running=await RunningModel.findOne({_id:id})
        await RunningModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).json({msg:`${running.title} updated`})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

runningRoute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try {
        const running=await RunningModel.findOne({_id:id})
        await RunningModel.findByIdAndDelete({_id:id})
        res.status(200).json({msg:`${running.title} deleted`})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports={
    runningRoute
}
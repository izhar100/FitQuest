const express=require('express')
const { CycleModel } = require('../models/cycling.model')
const { adminAuth } = require('../middleware/adminAuth.middleware')
const cyclingRoute=express.Router()

cyclingRoute.get("/",async(req,res)=>{
    try {
        const cycling=await CycleModel.find()
        res.status(200).json({cycling:cycling})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

cyclingRoute.use(adminAuth)

cyclingRoute.post("/create",async(req,res)=>{
    try {
        const cycling=new CycleModel(req.body)
        await cycling.save()
        res.status(200).json({msg:"new cycling workout created",cycling:cycling})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

cyclingRoute.patch("/update/:id",async(req,res)=>{
    const id=req.params.id
    try{
        const cycling=await CycleModel.findOne({_id:id})
        await CycleModel.findByIdAndUpdate({_id:id},req.body)
        res.status(200).json({msg:`${cycling.title} updated`})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

cyclingRoute.delete("/delete/:id",async(req,res)=>{
    const id=req.params.id
    try {
        const cycling=await CycleModel.findOne({_id:id})
        await CycleModel.findByIdAndDelete({_id:id})
        res.status(200).json({msg:`${cycling.title} deleted`})
        
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})


module.exports={
    cyclingRoute
}
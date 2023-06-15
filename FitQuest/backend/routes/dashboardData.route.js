const express=require("express")
const { DashboardDataModel } = require("../models/dashboardData.model")
const { userAuth } = require("../middleware/userAuth.middleware")
const { CoinModel } = require("../models/coins.model")
const dashboardDataRoute=express.Router()

dashboardDataRoute.use(userAuth)

dashboardDataRoute.get("/",async(req,res)=>{
    const userID=req.body.userID
    console.log(userID)
    try {
        const workout=await DashboardDataModel.find({userID:userID})
        res.status(200).json({workout:workout})
    } catch (error) {
        res.status(400).json({error:error})
    }
})

dashboardDataRoute.post("/add",async(req,res)=>{
    console.log(req.body)
    try {
        const workout=new DashboardDataModel({...req.body,isCompeleted:false})
        await workout.save()
        res.status(200).json({msg:"New workout added to progress",workout:workout})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

dashboardDataRoute.patch("/update/:id",async(req,res)=>{
    const userID=req.body.userID
    const id=req.params.id
    try {
        const workout=await DashboardDataModel.findOne({_id:id})
        const userIDinWorkout=workout.userID;
        if(userIDinWorkout==userID){
            await DashboardDataModel.findByIdAndUpdate({_id:id},{...req.body})
            res.status(200).json({msg:`${workout.title} updated`})
        }else{
            res.status(400).json({error:"Not Authorized"})
        }

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})

dashboardDataRoute.delete("/delete/:id",async(req,res)=>{
    const userID=req.body.userID
    const id=req.params.id
    try {
        const workout=await DashboardDataModel.findOne({_id:id})
        const userIDinWorkout=workout.userID;
        if(userIDinWorkout==userID){
            await DashboardDataModel.findByIdAndDelete({_id:id})
            res.status(200).json({msg:`${workout.title} deleted`})
        }else{
            res.status(400).json({error:"Not Authorized"})
        }

    } catch (error) {
        res.status(400).json({error:error.message})
    }
})
  
  
  

module.exports={
    dashboardDataRoute
}
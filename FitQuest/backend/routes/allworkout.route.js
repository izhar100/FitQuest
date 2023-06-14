const express=require("express")
const { RunningModel } = require("../models/running.model")
const { WalkingModel } = require("../models/walking.model")
const { CycleModel } = require("../models/cycling.model")
const allworkoutRoute=express.Router()

// allworkoutRoute.get("/all",(req,res)=>{
//     const query=req.query
//     console.log(query)
//     try {
//         Promise.all([
//             RunningModel.find(),
//             WalkingModel.find(),
//             CycleModel.find()
//         ]).then((data)=>{
//             res.status(200).json(data)
//         }).catch((err)=>{
//             res.status(400).json({error:err})
//         })
//     } catch (error) {
//         res.status(400).json({error:error.message})
//     }
// })

allworkoutRoute.get("/all", async (req, res) => {
    const { type, pace, speed, steps, duration, distance, terrain, search, page } = req.query;
    const limit = 10;
    const skip = (page - 1) * limit;
  
    try {
      const filters = {};
  
      // Apply filters
      if (type) filters.type = type;
      if (pace) filters.pace = pace;
      if (speed) filters.speed = speed;
      if (steps) filters.steps = steps;
      if (duration) filters.duration = duration;
      if (distance) filters.distance = distance;
      if (terrain) filters.terrain = terrain;
  
      let data = [];
  
      if (search) {
        const searchQuery = { type: { $regex: search, $options: "i" } };
        data = await Promise.all([
          RunningModel.find({ ...filters, ...searchQuery }).limit(limit).skip(skip),
          WalkingModel.find({ ...filters, ...searchQuery }).limit(limit).skip(skip),
          CycleModel.find({ ...filters, ...searchQuery }).limit(limit).skip(skip),
        ]);
      } else {
        data = await Promise.all([
          RunningModel.find(filters).limit(limit).skip(skip),
          WalkingModel.find(filters).limit(limit).skip(skip),
          CycleModel.find(filters).limit(limit).skip(skip),
        ]);
      }
  
      const mergedData = data.flat();
  
      res.status(200).json(mergedData);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });
  
  

module.exports={
    allworkoutRoute
}
const mongoose=require("mongoose")

const cycleSchema=mongoose.Schema({
  image:String,
  title:{type:String,required:true},
  duration: { type: Number, required: true },
  distance: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  terrain: { type: String, required: true },
  speed: { type: Number, required: true },
  type:{type:String,default:"cycling"}
},{
    versionKey:false
})

const CycleModel=mongoose.model("cycling",cycleSchema)

module.exports={
    CycleModel
}
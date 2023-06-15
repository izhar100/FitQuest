const mongoose=require("mongoose")

const walkingSchema=mongoose.Schema({
  image:String,
  title:{type:String,required:true},
  duration: { type: Number, required: true },
  distance: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  terrain: { type: String, required: true },
  steps: { type: Number, required: true },
  type:{type:String,default:"walking"}
},{
    versionKey:false
})

const WalkingModel=mongoose.model("walking",walkingSchema)

module.exports={
    WalkingModel
}
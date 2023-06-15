const mongoose=require("mongoose")

const RunningWorkoutSchema=mongoose.Schema({
    image:String,
    title:{type:String,required:true},
    duration: { type: Number, required: true },
    distance: { type: Number, required: true },
    caloriesBurned: { type: Number, required: true },
    terrain: { type: String, required: true },
    pace: { type: String, required: true },
    type:{type:String,default:"running"}
  },{
    versionKey:false
  });
  
  const RunningModel = mongoose.model('running', RunningWorkoutSchema);

  module.exports={
    RunningModel
  }
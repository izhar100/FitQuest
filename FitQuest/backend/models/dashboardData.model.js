const mongoose = require("mongoose");

const dashboardDataSchema = mongoose.Schema({
    image:String,
    title:String,
    duration:Number,
    distance:Number,
    caloriesBurned:Number,
    terrain:String,
    pace:String,
    steps:String,
    speed:String,
    type:String,
    isCompleted:Boolean,
    userID:String,
  }, 
  {
    versionKey: false,
  }
);

// {
//     userID: String,
//     workouts: [
//       {
//         type: Object,
//         isCompleted: { type: Boolean, default: false }
//       },
//     ],
//   },

const DashboardDataModel = mongoose.model("dashboardData", dashboardDataSchema);

module.exports={
    DashboardDataModel
}

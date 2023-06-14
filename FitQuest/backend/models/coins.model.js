const mongoose=require("mongoose")

const coinSchema=mongoose.Schema({
    coins:{ type: Number, default: 0 },
    userID:String,
    user:String
},{
    versionKey:false
})

const CoinModel=mongoose.model("coin",coinSchema)

module.exports={
    CoinModel
}
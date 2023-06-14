const express=require("express")
const cors=require("cors")
const { connection } = require("./db")
const { userRouter } = require("./routes/user.route")
const { runningRoute } = require("./routes/running.route")
const { walkingRoute } = require("./routes/walking.route")
const { cyclingRoute } = require("./routes/cycling.route")
const { allworkoutRoute } = require("./routes/allworkout.route")
const { dashboardDataRoute } = require("./routes/dashboardData.route")
require('dotenv').config()
const app=express()
app.use(express.json())
app.use(cors())
app.use("/users",userRouter)
app.use("/workout/running",runningRoute)
app.use("/workout/walking",walkingRoute)
app.use("/workout/cycling",cyclingRoute)
app.use("/workout",allworkoutRoute)
app.use("/workout/dashboard",dashboardDataRoute)


app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connected to database")
        console.log(`server is running at port ${process.env.port}`)
    } catch (error) {
        console.log("someting went wrong")
        console.log(error.message)
    }
})
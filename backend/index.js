import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
const app=express()




const connectToDb=async()=>{
    try {
      await  mongoose.connect(process.env.MONOOOO)

        console.log("connecred to db")
        
    } catch (error) {
        console.log("failed to connect to db")
    }
}
app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(7000,()=>{
    connectToDb()
    console.log("server is runing on port 7000")
})
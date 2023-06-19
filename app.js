import express from "express";
import mongoose from "mongoose";
const app = express();
const PORT = 5000;
import "./models/todo.js";//Loading a module
import todoRouter from "./routes/list.js";


//udAGGbMrFzAlOd4l

mongoose.connect("mongodb+srv://ayushwho:udAGGbMrFzAlOd4l@todo.ke8ubx9.mongodb.net/")   
mongoose.connection.on("connected", ()=>{console.log("Connected to database")})         
mongoose.connection.on("error", ()=>{console.log("error Connecting to database")}) 




//Middleware
app.use(express.json())
app.use("/api/todo",todoRouter);

app.get("./",(req,res)=>{
    res.send("Everthing working fine uptill now!");
})

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}...`)
})


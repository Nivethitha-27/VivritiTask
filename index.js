const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 5000;
const userinfo = require("./Router");

// I am using nodejs and expressjs framework to create rest_api and then mongoDB to store user info, 

//database connection

mongoose.connect(process.env.MONGO_DB,{useNewUrlParser:true,useUnifiedTopology:true},()=>{
   console.log("database connected");
})

//middleware
app.use(express.json());
app.use("/",userinfo);
app.get("/",(req,res)=>res.send("welcome"));

//server connection
app.listen(port,console.log("sever started"));
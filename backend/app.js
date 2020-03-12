const express = require("express");

const app = express();

app.use((req,res,next) =>{
    console.log("hi i am app from express");
    next();
})

app.use((req,res,next)=>{
    res.send("i am response");
})

module.exports = app;
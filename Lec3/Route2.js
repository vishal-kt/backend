const express = require('express')
const app = express()

app.use(function (req,res,next) {
    
    console.log("this is from middleware");
    next();
});


app.get("/", function (req,res) {

    res.send("Hello From Main Profile")
});


app.get("/profile/:username",function (req,res) {

    res.send(`Hello from ${req.params.username}`);
    
});




app.listen(3000);


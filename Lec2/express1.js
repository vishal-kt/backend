const express = require('express')
const app = express()

app.use(function (req,res,next) {

    var  c=0;
    c++
    console.log(`value of ${c}`);
    next();
    
})
app.get("/",function (req,res) {
    res.send("hello lodu")
})

app.get("/profile",function (req,res) {
    res.send("hello vishal")
})

app.listen(3000);
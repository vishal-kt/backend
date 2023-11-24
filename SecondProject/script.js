const express = require("express")
const app = express()

app.set("view engine","ejs");
// app.use(express.static)

app.use(express.static('./public'));


app.get("/",function (req,res) {
    // res.render("index");
    throw Error("i dnt Know ");
});

app.get("/error",function (req,res,next) {
    throw Error("Something Went Wrong")    
})

app.get("/contact",function (req,res) {
   
});


app.use(function errorHandler(err,req,res,next) {
    if(res.headersSent){
        return next(err)
    }
    res.status(500)
    res.render('error',{error:err})
})

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


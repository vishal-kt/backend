const express = require("express");
const app = express()

app.set("view engine","ejs");

app.get("/",function (req,res) {
    res.render("index", {Home:"🏠",Contact:"📞", Info :"ℹ"});
});

app.listen(3000, function () {
    console.log("Server is running on port 3000");
});
const express = require("express")
const app = express()

app.set("view engine","ejs");
app.use(express.static)

app.get("/",function (req,res) {
    res.render("index");

});


app.get("/contact",function (req,res) {
    res.render("");
});


app.listen(3000, function () {
    console.log("Server is running on port 3000");
});


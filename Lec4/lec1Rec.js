const express = require("express");
const app = express();

// Set the view engine to EJS
app.set("view engine", "ejs");

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/contact", function (req, res) {
    res.render("contact");
});
app.listen(3000, function () {
    console.log("Server is running on port 3000");
});

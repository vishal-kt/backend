const express = require('express');
const app = express();

let c = 0; // Initialize the counter

app.use(function (req, res, next) {
    console.log("hello ");
    next();
});

app.get("/", function (req, res) {
    res.send("hello lodu");
});

app.get("/profile", function (req, res) {
    c++; // Increment the counter
    res.send(`value of c: ${c}`);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

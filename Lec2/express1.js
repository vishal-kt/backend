const express = require('express')
const app = express()
app.get("/",function (req,res) {
    res.send("hey")
})

app.listen(3000);
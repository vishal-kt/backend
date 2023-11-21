const express = require('express')
const app = express()
app.get("/",function (req,res) {
    res.send("hello lodu")
})

app.get("/profile",function (req,res) {
    res.send("hello vishal")
})

app.listen(3000);
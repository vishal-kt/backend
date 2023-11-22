// Import the Express.js framework
const express = require('express');

// Create an instance of the Express application
const app = express();

// Define a route for handling HTTP GET requests to the root path ("/")
app.get('/', function (req, res) {
    // Send the response "This is Main Page, We are On Main Page"
    res.send("This is Main Page, We are On Main Page ..👩‍💻👩‍💻👩‍💻👩‍💻 Lets Code");
});

// Make the server listen on port 3000


app.get('/aboutme',function (req,res) {
        res.send("Hi Guys i am Vishal Kumar 👨 i am learning Node and Express how Backend Work")    
})


app.get('/project',function (req,res) {
    res.send("I have made some Android 📱 Projects and some Cool Website 🖥💻")
})

app.listen(3000);

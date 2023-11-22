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
app.listen(3000);

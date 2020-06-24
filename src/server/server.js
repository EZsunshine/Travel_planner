var path = require('path')
// Require Express to run server and routes
const express = require("express")
// Start up an instance of app
const app = express()

/* Dependecies */
const bodyParser = require("body-parser")

/* Middleware */
// Here we are configuring express to use body-parser as middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// cors for cross origin allowance
const cors = require('cors')
const { Router } = require('express')
app.use(cors())

// Initialze the main project folder
app.use(express.static('dist'))
console.log(__dirname)


// designates what port the app wil listen to for incoming requests
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`CORS-enabled web server listening on port ${PORT}`);
});


// Stup emput JS object to run server and routes
const projectData = {}

// GET Route
app.get('/all', sendData)
// Callback function to complete GET '/all'
function sendData(req, res) {
    res.send(projectData)
}


// POST Route
app.post('/add', addInfo)
// Callback function to commplete POST '/add'
function addInfo(req, res) {
    projectData['des'] = req.body.asciiName
    projectData['lat'] = req.body.lat
    projectData['lng'] = req.body.lng
    res.send(projectData)
    console.log(projectData)
}

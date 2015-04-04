

//package.json was installed using npm init
//express was installed in this folder using npm install --save express
//tried a couple of generators - just got too much junk
//test server started and run using nodemon app.js


//the goal is to print out all the stuff sent to server from the client
//and print out anything the server sends back


//Express Specific
var express= require('express');
var app = express(); // could be combined to single statement var app=require('express')();

// app.use('/', express.static(__dirname));
// serve static folder - will automatically check for index and serve that.
// serves the entire public folder structure for Single Page App
app.use('/', express.static(__dirname + '/public'));


var theData = ['these', 'are',  'things', 'that', 'are', 'served', 'up', 'from', 'the', 'server'];

app.get('/data', function(req, res){
  res.send(theData);
});

// set the port
app.listen(8000);
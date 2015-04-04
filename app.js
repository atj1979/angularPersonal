

//package.json was installed using npm init
//express was installed in this folder using npm install --save express
//test server started and run using nodemon


//the goal is to print out all the stuff sent to server from the client and print out anything the server sends back


//Express Specific
var express= require('express');
var app = express();

//Developer Defined
// app.use('/', express.static(__dirname));
app.use('/', express.static(__dirname + '/public'));


var theData = ['these', 'are',  'things', 'that', 'are', 'served', 'up', 'from', 'the', 'server'];
app.get('/data', function(req, res){




  res.send(theData);



});



app.listen(8000);


//package.json was installed using npm init
//express was installed in this folder using npm install --save express
//test server started and run using nodemon


//the goal is to print out all the stuff sent to server from the client and print out anything the server sends back


//Express Specific
var express= require('express');
var app = express();

//Developer Defined



app.get('/', function(req, res){
  console.log("serving up stuff from here.");
  console.log(req.route.path);
  console.log(req.url);
  console.log(req.method);
  
  res.send(['these', 'are', 'the', 'things', 'that', 'my server', 'is', 'sending', 'back']);

});

app.listen(8000);
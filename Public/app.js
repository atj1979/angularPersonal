angular.module('tonyApp', ['tonyApp.factory'])
// /*Factorys and other dependancies (dependancy injection)*/
  .controller('tonyController', function (Data){
    var self = this;
    // self.theData = {['these', 'are', 'the', 'things', 'that', 'are', 'served', 'up', 'from', 'the', 'server'];
  //get data from server - send it to a factory to get the data

  //results are the results from the function call factory.getTheData();
    self.getFromServer = function (){
      Data.getTheData()
        .then(function (results){
          console.log(results);
          self.results = results;
        })
        .catch(function(error){
          console.error("there was an error");
        });
    };
    self.something = function (){
      return "M. Hari is the shiz";
    };
  });

  



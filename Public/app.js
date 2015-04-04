//anglular.module('modulename', [dependancy modules here])
angular.module('tonyApp', ['tonyApp.factory'])
//other dependancies .controller('controllername',function (dependancy injection)
  .controller('tonyController', function (Data){
    // this is the 'controller as controller thing - otherwise we put stuff on $scope'
    var self = this;
  
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

  



angular.module('tonyApp.factory', [])
//.factory('factoryName', function(dependancy injection){}). other chained factories
// $http is native to angular
	.factory('Data', function ($http) {
		var getTheData = function (){		
	    return $http({
	      method: 'GET',
	      url: '/data'
	    }).then(function (res){
	    	console.log('getTheData was called' + res);
	    	console.dir(res);
	      return res.data;
	    }).catch(function (error) {
	      console.error('get data did not work - good luck with that', error);
	    });
		};
		//factories must always return this object for some reason otherwise some error
		return {
			getTheData:getTheData
		};
	});
  

app.factory("UserFactory", ["$http", function($http){
	var factory = {};
	factory.getOne = function(userID, callback){
		$http.get(`/user/${userID}`).then(function(data){
			callback(data.data);
		})
	}
	return factory;

}])
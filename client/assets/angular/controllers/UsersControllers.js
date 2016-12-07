app.controller("UsersController", ["$scope", "$location", "$routeParams", "UserFactory", "SessionFactory", function($scope, $location, $routeParams, UserFactory, SessionFactory){

	UserFactory.getOne($routeParams.id, function(user){
		$scope.user = user;
	})
}])
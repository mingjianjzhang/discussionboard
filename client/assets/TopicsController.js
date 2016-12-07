app.controller("TopicsController", ["$scope", "$location", "$routeParams", "TopicFactory", "SessionFactory", function($scope, $location, $routeParams, TopicFactory, SessionFactory){

	$scope.test = $routeParams.id;

}])
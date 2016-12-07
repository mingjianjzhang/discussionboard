app.controller("DashboardController", ['$scope', '$location', 'SessionFactory', 'TopicFactory', function($scope, $location, SessionFactory, TopicFactory){
	SessionFactory.getCurrent(function(user){
		$scope.currentUser = user;
	})
	TopicFactory.getCategories(function(categories){
		$scope.categories = categories;
	})
	function fetchTopics(){
		TopicFactory.getAll(function(topics){
			$scope.topics = topics;
		})
	}
	fetchTopics();

	$scope.logout = function(){
		SessionFactory.logout(function(){
			$location.path('/');
		});
	}
	
	$scope.createTopic = function(topic){
		$scope.newDiscussion._creator = $scope.currentUser._id
		TopicFactory.create(topic, function(data){
			console.log(data);
		})
		fetchTopics();
	}


}])
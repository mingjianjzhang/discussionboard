app.controller("TopicsController", ["$scope", "$location", "$routeParams", "TopicFactory", "SessionFactory", function($scope, $location, $routeParams, TopicFactory, SessionFactory){
	
	SessionFactory.getCurrent(function(user){
		$scope.currentUser = user;
	})
	function fetchTopic(){
		TopicFactory.getOne($routeParams.id, function(topic){
			$scope.topic = topic
			console.log($scope.topic)
		})	
	}
	fetchTopic();
	$scope.logout = function(){
		SessionFactory.logout(function(){
			$location.path('/');
		});
	}
	$scope.createPost = function(post){
		$scope.newPost._author = $scope.currentUser._id;
		$scope.newPost.topicID = $scope.topic._id;
		console.log($scope.newPost);
		TopicFactory.createPost(post, function(data){
			fetchTopic();
		})
	}
	$scope.createComment = function(comment, postID){
		comment.postID = postID;
		comment.topicID = $scope.topic._id;
		comment._author = $scope.currentUser._id;
		console.log($scope.newComment);
		TopicFactory.createComment(comment, function(data){
			fetchTopic();
		})
	}

}])
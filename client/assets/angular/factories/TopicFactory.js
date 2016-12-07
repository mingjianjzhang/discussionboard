app.factory("TopicFactory", ["$http", "$location", function($http, $location){
	var factory = {};
	factory.getCategories = function(callback){
		$http.get("/allCategories").then(function(data){
			callback(data.data);
		})
	}
	factory.create = function(topic, callback){
		$http.post("/topics", topic).then(function(res){
			callback(res.data);
		})
		$http.patch("/topicCount").then(function(res){

		})
	}
	factory.getAll = function(callback){
		$http.get("/topics").then(function(data){
			console.log(data.data, "in factory")
			callback(data.data);
		})
	}
	factory.getOne = function(topicID, callback){
		$http.get(`/topic/${topicID}`).then(function(data){
			callback(data.data);
		})
	}
	factory.createPost = function(post, callback){
		$http.post(`/posts`, post).then(function(res){
			callback(res.data);
		})
	}
	factory.createComment = function(comment, callback){
		$http.post(`/comments`, comment).then(function(res){
			callback(res.data);
		})
	}
	return factory;
}])
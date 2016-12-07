var mongoose = require('mongoose');
var Category = mongoose.model('Category');
var Topic = mongoose.model('Topic');
var User = mongoose.model('User');
module.exports = {
	getAllCategories: function(req, res){
		Category.find({}, function(err, categories){
			res.json(categories);
		})
	},
	addCategory: function(req, res){
		var category = new Category(req.body);
		category.save(function(err, category){
			res.json(Category.find({}));
		})
	},
	create: function(req, res){
		console.log("am i getting here".red);
		var topic = new Topic(req.body);
		topic.save(function(err, topic){
			res.json(topic);
		})
	},
	getAll: function(req, res){
		Topic
			.find({})
			.populate('_creator')
			.populate('category')
			.populate('posts._author')
			.exec(function(err, topics){
				console.log(topics);
				res.json(topics);
			})
	},
	show: function(req, res){
		Topic
			.findById(req.params.id)
			.populate('_creator')
			.populate('posts._author')
			.exec(function(err, topic){
				console.log(topic)
				res.json(topic);
			})
	},
	createPost: function(req, res){
		Topic
			.findById(req.body.topicID)
			.exec(function(err, topic){
				topic.posts.push(req.body);
				topic.save(function(err){
					if (err) {
						console.log(err);
					} else {
						User.update({_id: req.session.user._id}, { $inc: { numPosts: 1 }}, function(err, user){
							console.log("numposts should be incremented now");
						})
						res.json(topic);
						console.log(topic);	
					}
				})
			})
	},
	createComment: function(req, res){
		console.log(req.body);
		Topic
			.findById(req.body.topicID)
			.exec(function(err, topic){
				console.log(err, "here is a possible error");
				console.log(topic, "this should be the topic");
				topic.posts[req.body.postID].comments.push(req.body);
				topic.save(function(err){
					if (err){
						console.log(err);
					} else {
						User.update({_id: req.session.user._id}, { $inc: {numComments: 1}}, function(err, user){

						})
						res.sendStatus(200);
					}
				})
				
			})
	}

}
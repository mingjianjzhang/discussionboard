var mongoose = require('mongoose'),
Schema = mongoose.Schema;
console.log("will this show");
var match = [	
/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i, "Invalid email address"]
var UserSchema = new mongoose.Schema({
	name: {type: String, required:[true, "You must provide a name"], minlength: [2, "Your name is too short to be a name"] },
	email: {type: String, required:[true, "You must provide an email address"], match: match},
	password: {type: String, required:[true, "You must provide a password"], minlength: [8, "Your password must be at least 8 characters"]},
})

UserSchema.add({numPosts: {type: Number, default: 0}})
UserSchema.add({numComments: {type: Number, default: 0}})
UserSchema.add({numTopics: {type: Number, default: 0}})
mongoose.model('User', UserSchema);


// var User = mongoose.model('User');
// var Topic = mongoose.model('Topic');
// var Category = mongoose.model('Category');
 
// User.findOne({email: "josh.zhang91@gmail.com"}, function(err, person){
// 	self = person;
// 	Category.findOne( {name: "HTML"}, function(err, category){
// 		var newTopic = new Topic({_creator: self._id, category: category._id})
// 		console.log(newTopic);
// 		console.log(self);
// 		newTopic.save();
// 	})
// })

// Topic
// 	.findById("5844d256ff46970554f38d7b")
// 	.populate("_creator")
// 	.populate("category")
// 	.exec(function(err, topic){
// 		console.log("The creator is".green, topic._creator.name);
// 		console.log("The category is".red, topic.category.name);
// 	})

 

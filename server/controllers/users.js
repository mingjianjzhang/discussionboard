var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
	register: function(req, res){
		console.log("****About to register a user****".blue);
		if (req.body.passwordConfirmation != req.body.password){
			console.log("PASSWORDS DIDN'T MATCH".red);
			res.send({badPassword: [{"message": "Passwords need to match"}]});
		} else {
			var user = new User(req.body);
			user.save(function(err, user){
				if (err){
					res.json(err);
				} else {
					req.session.user = {
						name: user.name,
						_id: user._id
					}
					console.log(req.session.user);
					res.sendStatus(200);
				}
			})
		}
	},
	login: function(req, res){
		var errors = [];
		if(!req.body.email) {
			errors.push("Please enter an email address")
		}
		if(!req.body.password){
			errors.push("Please enter a password");
		}
		if (errors.length){
			res.json({errors: errors});
		} else {
			User.findOne({email: req.body.email}).exec(function(err, user){
				console.log("this error came from user.findone".cyan, err);
				if (!user) {
					errors.push("You're not in our records ... try registering?")
					res.json({errors: errors})
				} else {
					if (user.password != req.body.password ){
						errors.push("Wrong password")
						res.json({errors: errors})
					} else {
						req.session.user = {
							name: user.name,
							_id: user._id
						}
						res.send(user);
					}

				}
			})
		}
	},
	getCurrent: function(req, res){
		User.findOne({_id: req.session.user._id}).exec(function(err, user){
			if (err) {
				res.sendStatus(400);
			} else {
				res.json({name: user.name, _id: user._id})
			}
		})
	},

	incTopics: function(req, res){
		console.log("beginning topic increment");
		User.update({_id: req.session.user._id}, { $inc: { numTopics: 1 }}, function(err, user){
			console.log(user, "should be incremented now");
		})
	},
	logout: function(req, res){
		req.session.destroy(function(err){
			res.sendStatus(200);
		})
	},
	show: function(req, res){
		User
			.findById(req.params.id)
			.exec(function(err, user){
				res.json(user);
			})
	}
}
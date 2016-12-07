var users = require('./../controllers/users.js');
var topics = require('./../controllers/topics.js');
module.exports = function(app){
	app.post('/users', users.register);
	app.post('/login', users.login);
	app.use(userAuth);
	app.get("/user/:id", users.show);
	app.post("/comments", topics.createComment);
	app.delete('/logout', users.logout);
	app.get('/currentUser', users.getCurrent);
	app.get('/allCategories', topics.getAllCategories);
	app.get('/topics', topics.getAll);
	app.post('/topics', topics.create);
	app.patch('/topicCount', users.incTopics);
	app.get('/topic/:id', topics.show);
	app.post('/posts', topics.createPost);
}

function userAuth(req, res, next){
	if (req.session.user) {
		next();
	} else {
		res.sendStatus(401);
	}
}
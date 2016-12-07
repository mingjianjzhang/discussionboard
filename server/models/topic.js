var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var TopicSchema = new mongoose.Schema({
	_creator: {type: Schema.Types.ObjectId, ref: 'User' },
	title: {type: String},
	category: { type: Schema.Types.ObjectId, ref: 'Category' },
	description: {type: String },
	posts: [
		{
			_author: {type: Schema.Types.ObjectId, ref: 'User'},
			text: {type: String},
			upvotes: {type: Number, default: 0},
			downvotes: {type: Number, default: 0},
			comments: [
				{ 
					_author: {type: Schema.Types.ObjectId, ref: 'User'},
					text: {type: String}
				}
			]
		}
	] 
})

mongoose.model('Topic', TopicSchema);





 
const mongoose     = require('mongoose');
const Schema       = mongoose.Schema;

const PostsSchema   = new Schema({
	id: Number,
	title: String,
	categories: String,
	content: String
});

module.exports = mongoose.model('Posts', PostsSchema);

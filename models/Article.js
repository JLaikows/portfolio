const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const ArticleSchema = new Schema({
  title: { type: String, required: true },
  tags: { type: Text, required: true },
}, {
  timestamps: true,
});


const Example = mongoose.model('Article', ArticleSchema);


module.exports = Example;
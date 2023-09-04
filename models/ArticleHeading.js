const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const ArticleHeadingSchema = new Schema({
  description: { type: Text, required: true },
  link: { type: String, required: true },
}, {
  timestamps: true,
});


const Example = mongoose.model('ArticleHeading', ArticleHeadingSchema);


module.exports = Example;
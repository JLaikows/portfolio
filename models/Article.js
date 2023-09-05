const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// type Article = {
//     description: String,
//     link: String,
//     gLink: String
// }

const ArticleSchema = new Schema(
  {
    description: { type: String, required: true },
    link: String,
    gLink: String,
  },
  {
    timestamps: true,
  },
);

const Example = mongoose.model('Article', ArticleSchema);

module.exports = Example;

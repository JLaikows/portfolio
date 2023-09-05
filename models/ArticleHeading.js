const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ArticleHeadingSchema = new Schema(
  {
    title: { type: String, required: true },
    tags: { type: String, required: true },
    articleId: { type: String, required: true },
    author: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

const ArticleHeading = mongoose.model('ArticleHeading', ArticleHeadingSchema);

module.exports = ArticleHeading;

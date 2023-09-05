const Article = require('../../models/Article');
const ArticleHeading = require('../../models/ArticleHeading');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const passport = require('passport');

require('dotenv').config();

router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  /* 
      Used to regist new users and return account info
  
      Route: /api/users/register
      Required: {
          title: string
          tags: string
          description: text
          * optional *
          link: string
          gLink:string
      }
    */

    

  const rawArticle = req.body;

  const article = new Article({
    description: rawArticle.description,
    link: rawArticle.link,
    gLink: rawArticle.gLink,
  });
    article.save().then((a) => {
      const articleHeading = new ArticleHeading({
        title: rawArticle.title,
        tags: rawArticle.tags,
        articleId: a.id,
        author: req.user.username,
      });

      articleHeading
        .save()
        .then((ah) => {
          console.log('new article => ', ah);
          res.json(ah);
        })
        .catch(e => {
          res.status(500).json({ error: e })})
    }).catch(e => res.status(500).json({ error: e }));
});


router.delete('/:id', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    ArticleHeading.findById(req.params.id).then(async ah => {
      await Article.deleteOne({_id: ah.articleId})
      console.log('deleted article => ', ah.articleId);
      await ArticleHeading.deleteOne({_id: ah.id})
      console.log('deleted article => ', ah.title);
      res.json(ah);
    })
  } catch (e) {
    res.status(500).json({ error: e })
  }
})

module.exports = router;

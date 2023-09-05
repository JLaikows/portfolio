const express = require('express');
const router = express.Router();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../models/User');
const passport = require('passport');
require('dotenv').config();

router.post('/register', (req, res) => {
  /* 
    Used to regist new users and return account info

    Route: /api/users/register
    Required: {
        username: string
        password: string
    }
  */
  User.findOne({ handle: req.body.username }).then((user) => {
    const body = req.body;
    if (user) {
      return res
        .status(400)
        .json({ [body.handle]: 'Name has already been taken' });
    } else {
      try {
        const newUser = new User({
          username: body.username,
          password: body.password,
        });

        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            console.log(err);
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()
              .then((user) => {
                console.log('New User Created => ', user);
                res.json(user);
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({ error: err });
              });
          });
        });
      } catch (e) {
        res.status(500).json({ error: e });
      }
    }
  });
});

router.post('/login', (req, res) => {
  /* 
    Used to login users an return a token + account info 

    Route: /api/users/login
    Required: {
        username: string
        password: string
    }
  */
  const { username, password } = req.body;

  User.findOne({ username: username }).then((user) => {
    if (!user) {
      return res.status(404).json({ username: 'This user does not exist' });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = { id: user.id, handle: user.handle };

        jwt.sign(
          payload,
          process.env.MONGODB_URI,
          { expiresIn: 3600 },
          (err, token) => {
            console.log('User Logged In ==>', user);
            res.json({
              user: user,
              token: 'Bearer ' + token,
            });
          },
        );
      } else {
        return res.status(400).json({ password: 'Incorrect Password' });
      }
    });
  });
});

router.patch('/change-password', (req, res) => {
  /* 
    Used to change a users password

    Route: /api/users/change-password
    Required: {
        username: string
        oldPassword: string,
        newPassword: string,
    }
  */
  const { username, oldPassword, newPassword } = req.body;
  User.findOne({ username: username }).then((user) => {
    if (!user) {
      return res.status(404).json({ error: 'This user does not exist' });
    }

    bcrypt.compare(oldPassword, user.password).then((isMatch) => {
      if (isMatch) {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newPassword, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
            user
              .save()
              .then((user) => {
                console.log(`${username} changed password`);
                res.json(user);
              })
              .catch((err) => {
                console.log(err);
                res.status(500).json({ error: err });
              });
          });
        });
      } else {
        return res.status(400).json({ password: 'Incorrect Old Password' });
      }
    });
  });
});

router.get(
  '/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    res.json({
      username: req.user.username,
    });
  },
);

module.exports = router;

const mongoose = require('mongoose')


const Schema = mongoose.Schema;


const UserSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
}, {
  timestamps: true,
});


const Example = mongoose.model('User', UserSchema);


module.exports = Example;
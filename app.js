const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const api = require("./routes/api");
const passport = require("passport");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    app.use(passport.initialize());
    require("./config/passport")(passport);
    app.use('/api', api)
    // Start the server
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });


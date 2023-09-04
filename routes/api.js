const express = require("express");
const router = express.Router();

const users = require("./api/user");

router.use("/users", users);

module.exports = router;
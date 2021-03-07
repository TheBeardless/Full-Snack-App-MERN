const { Db } = require("mongodb");
const mongoose = require("mongoose");

const DbSchema = mongoose.Schema;

const userSchema = DbSchema({
  username: String,
  password: String,
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;

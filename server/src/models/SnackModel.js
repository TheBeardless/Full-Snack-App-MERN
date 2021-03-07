const { Db } = require("mongodb");
const mongoose = require("mongoose");

const DbSchema = mongoose.Schema;

const snackSchema = new DbSchema({
  name: String,
  rating: Number,
});

const snackModel = mongoose.model("Snack", snackSchema);
module.exports = snackModel;

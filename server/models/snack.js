const mongoose = require("mongoose");

const snackSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  description: String,
});

module.exports = mongoose.model("Snack", snackSchema);

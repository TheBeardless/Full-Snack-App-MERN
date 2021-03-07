const { Db } = require("mongodb");
const mongoose = require("mongoose");

const DbSchema = mongoose.Schema;

const RatingSchema = new DbSchema({
  rating: Number,
});

const ratingModel = mongoose.model("Rating", RatingSchema);
module.exports = ratingModel;

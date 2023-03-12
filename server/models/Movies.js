const { Schema, model } = require("mongoose");

const columns = {
  title: String,
  image: String,
  rating: Number
};

const schema = new Schema(columns);
const movieModel = model("movies", schema);

module.exports = movieModel;

// import mongoose
const mongoose = require("./connection");

///////////////////////////////
// MODELS
////////////////////////////////
const peopleSchema = new mongoose.Schema({
  name: String,
  image: String,
  title: String,
});

const People = mongoose.model("People", peopleSchema);

module.exports = People;
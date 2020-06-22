const mongoose = require('mongoose');

const Movie = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  poster: { type: String }
});

module.exports = mongoose.model('Movie', Movie);

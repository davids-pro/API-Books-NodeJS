const mongoose = require('mongoose');

const Book = mongoose.Schema({
  title: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('Book', Book);

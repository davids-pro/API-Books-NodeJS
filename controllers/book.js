const Book = require('../models/Book');

exports.createBook = (req, res) => {
  const book = new Book({
    ...req.body
  });
  book
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Livre ajouté'
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.getBook = (req, res) => {
  Book.findById(req.params.id)
    .then((book) => {
      res.status(200).json(book);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.getBooks = (req, res) => {
  Book.find()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.updateBook = (req, res) => {
  Book.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(() => {
      res.status(200).json({
        message: 'Le livre a bien été mis à jour !'
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteBook = (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(201).json({
        message: 'Le livre a bien été supprimé'
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

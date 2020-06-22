const Movie = require('../models/Movie');

exports.createMovie = (req, res) => {
  const movie = new Movie({
    ...req.body
  });
  movie
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Film ajouté'
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.getMovie = (req, res) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.getMovies = (req, res) => {
  Movie.find()
    .then((movies) => {
      res.status(200).json(movies);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.updateMovie = (req, res) => {
  Movie.findByIdAndUpdate(req.params.id, { ...req.body })
    .then(() => {
      res.status(200).json({
        message: 'Le film a bien été mis à jour !'
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

exports.deleteMovie = (req, res) => {
  Movie.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(201).json({
        message: 'Le film a bien été supprimé'
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

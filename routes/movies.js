const express = require('express');
const movieControler = require('../controllers/movie');

const router = express.Router();

router.post('/', movieControler.createMovie);
router.get('/', movieControler.getMovies);
router.get('/:id', movieControler.getMovie);
router.put('/:id', movieControler.updateMovie);
router.delete('/:id', movieControler.deleteMovie);

module.exports = router;

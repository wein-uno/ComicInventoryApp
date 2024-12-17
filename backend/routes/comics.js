const express = require('express');
const { getComics, addComic, editComic, deleteComic, getComicById } = require('../controllers/comicsController');
const router = express.Router();

router.get('/', getComics);
router.post('/', addComic);
router.get('/:id', getComicById);
router.put('/:id', editComic);
router.delete('/:id', deleteComic);

module.exports = router;

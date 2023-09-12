const express = require('express');
const router = express.Router();
const customHeader = require ('../middleware/customHeader');
const { validatorCreateItem } = require('../validators/tracks');
const {getItems, getItem, createItem} = require('../controllers/geojson');
const { ResultWithContextImpl } = require('express-validator/src/chain');

router.get('/', getItems);
router.get('/:id', getItem);
router.post('/', createItem);

module.exports = router
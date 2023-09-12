const express = require('express');
const router = express.Router();
const customHeader = require ('../middleware/customHeader');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const {getItems, getItem, createItem, updateItem} = require('../controllers/tracks');
const { ResultWithContextImpl } = require('express-validator/src/chain');

router.get('/', getItems);

router.get('/:id', validatorGetItem, getItem);

router.post('/', validatorCreateItem, createItem);

router.put('/:id', validatorGetItem,  validatorCreateItem, updateItem);


module.exports = router
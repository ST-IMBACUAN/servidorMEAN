const {geojsonModel} = require('../models');
const {PUBLIC_URL} = process.env.PUBLIC_URL


const getItems = async (req, res) =>{
    const data = await geojsonModel.find({});

    res.send({data})
};
const getItem = (req, res) =>{};

const createItem = async (req, res) =>{
    const {body} = req
    console.log(body)
    const data = await geojsonModel.create(body)
    res.send({data})
};

const updateItem = (req, res) =>{};

const deleteItem = (req, res) =>{};


module.exports = {getItems, getItem, createItem, updateItem, deleteItem};
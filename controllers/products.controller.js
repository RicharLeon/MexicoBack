const bodyParser = require('body-parser');
const { response } = require('express');
const Products = require('../models/products.model');
const ObjectId = require('mongoose');

/**
 * this is a asynchronous function for send all data
 * @param {*} req 
 * @param {*} res 
 */
const productsGet = async (req, res) => {

    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send(error);
    }
}

/**
 * this is a asynchronous function for send dara specific 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const productsGetid = async (req, res) => {

    try {
        const { id } = req.params;

        if (!ObjectId.isValidObjectId(id)) {
            return res.status(400).json({ mensaje: 'ID de producto inválido' });
        }

        const products = await Products.findById(id);
        res.status(200).json(products);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

/**
 * this is a asynchronous function for receive new data
 * @param {*} req 
 * @param {*} res 
 */
const productsPost = async (req, res) => {

    try {
        const newProduct = await Products.create(req.body);
        res.status(200).json(newProduct);
    } catch (err) {
        res.status(500).send(err)
    }
};

/**
 * this is a asynchronous function for edit data
 * @param {*} req 
 * @param {*} res 
 */
const productsPuth = async(req, res) => {

    try {
        const id = req.params.id;
        const newData = req.body;
        const product = await  Products.findByIdAndUpdate(id, newData, { new: true });
        if (!product) {
            res.status(404).send('Producto no encontrado');
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).send(err.message);
    }
}

/**
 * this is a asynchronous function for delete data
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const productsDelete = async(req, res) => {

    try {
        const id = req.params.id;
        const products = await Products.findByIdAndRemove(id);
        if (!products) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json({ message: 'Producto eliminado correctamente' });
    } catch (err) {
        res.status(500).send(err.message);
    }
}

/**
 * this is a asynchronous function for edit specific data
 * @param {*} req 
 * @param {*} res 
 */
const productsPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'this funtion is for edit specific data'
    })
}

/**
 * Here export that funtions
 */
module.exports = {
    productsGet,
    productsDelete,
    productsPatch,
    productsPost,
    productsPuth,
    productsGetid
}
const { Router } = require('express');
const { productsGet, productsPost, productsPuth, productsPatch, productsDelete, productsGetid } = require('../controllers/products.controller');

/**
 * here we host the API, it works for sending and receiving the data
 */
const router = Router();

    router.get('/', productsGet);
    router.get('/:id', productsGetid);
    router.post('/', productsPost);
    router.put('/:id', productsPuth);
    router.delete('/:id', productsDelete);
    router.patch('/', productsPatch);

    /**
     * Export const for to be used on the server
     */
module.exports = router;
const express = require('express');
const router = express.Router();
const controller = require('../controller/productController');

router.get("/productCart", controller.productCart);

router.get("/productDetail", controller.productDetail);

router.get("/create", controller.create);

router.get("/edit", controller.edit);

module.exports = router;
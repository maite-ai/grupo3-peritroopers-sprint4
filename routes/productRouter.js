const express = require('express');
const router = express.Router();
const controller = require('../controller/productController');
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({
    destination: path.resolve(__dirname, '../public/images'),
    filename: (req, file, cb) => {
        cb(null, 'img-' + Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({storage});

router.get("/productCart", controller.productCart);

router.get("/create", controller.create);

router.get("/:id", controller.show);

router.get('/search', controller.search);

router.get("/:id/edit", controller.edit);

router.post('/store', upload.single('image'), controller.store);

router.put('/:id', upload.single('image'), controller.update);

router.delete('/:id', controller.destroy);

module.exports = router;
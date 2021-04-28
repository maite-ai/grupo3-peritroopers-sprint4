let productController = {
    productCart: (req, res) => { 
        res.render("productCart");
    },

    productDetail: (req, res) => {
        res.render("./products/productDetail");
    },

    create: (req, res) => {
        res.render("./products/createProduct");
    },

    edit: (req, res) => {
        res.render("./products/editProduct");
    }
}

module.exports = productController
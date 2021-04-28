let homeController = {
    home: (req, res) => { 
        res.render("index");
    },

    faq: (req, res) => {
        res.render("faq");
    }
}

module.exports = homeController
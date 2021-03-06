var Product = require("../../db").Product;
var route = require("express").Router();


route.get("/", function(req, res) {
    //Get all Products; sequelize will fetch all products following a get request
    Product.findAll()
    .then(function(products) {
        res.status(200).send(products);
    })
    .catch(function(err) {
        res.status(500).send({
            error: "Could not  retrieve products"
        });
    });

});

route.post("/", function(req, res) {
    //Validate the values and reject if not a number
    if (isNaN(req.body.price)) {
        return res.status(403).send({
            error: "Price is not valid number"
        });
    }
    //Add a new Product
    Product.create({
        name: req.body.name,
        department: req.body.department,
        price: parseFloat(req.body.price),
        picture: req.body.picture  
    }).then(function(product){
        res.status(201).send(product);
    }).catch(function(err) {
        res.status(501).send({
            error: "Error adding product"
        });
    });
});

route.get("/:id", function(req, res) {
    var numberId = parseInt(req.params.id);

    console.log(typeof numberId);
    //Get all Products; sequelize will fetch all products following a get request
    Product.findOne({
        where: {
            id: numberId
        }
    })
    .then(function(products) {
        res.status(200).send(products);
    })
    .catch(function(err) {
        res.status(500).send({
            error: "Could not  retrieve products"
        });
    });

});

exports = module.exports = route;



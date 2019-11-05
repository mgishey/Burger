var express = require("express");

// Import the model (burger.js) to use its database function
var burger = require("../models/burger.js");

// Create Router
var router = express.Router();

// Create all our routes and set up logic where required.
// Show all burgers.
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function(result) {
        // Send back ??
        res.json({id: result.insertId});
    });
});












// Export routes for server.js to use
module.exports = router;
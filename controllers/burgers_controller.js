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

router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        // Send back ??
        console.log("In POST");
        res.json({ id: result.insertId });

    });
});

router.delete("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});












// Export routes for server.js to use
module.exports = router;
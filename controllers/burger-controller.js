/**
 * Burger Controller
 */

// Dependencies
// ----------------------------------------

const burger = require("../models/burger"),
express = require("express"),
bodyParser = require("body-parser");

// Setup
// ----------------------------------------

// Url encoded body parser
const parseUrlEncoded = bodyParser.urlencoded({extended: true});

// Router
// ----------------------------------------

const router = express.Router();

// Root route
router.get("/", (req, res) => {
    burger.selectAll((err, data) => {
        const burgers = [],
        devouredBurgers = [];
        data.forEach((burger) => {
            if (burger.devoured) devouredBurgers.push(burger);
            else burgers.push(burger);
        });
        if (!err) res.render("index", {
            burgers: burgers.length > 0 ? burgers : false, 
            devouredBurgers: devouredBurgers.length > 0 ? devouredBurgers : false
        });
        else res.status(500);
    });
});

// Burger create
router.post("/burgers", parseUrlEncoded, (req, res) => {
    burger.insertOne(req.body.burgerName, (err, data) => {
        if (!err) return res.end();
        return res.status(500);
    });
});

// Burger update
router.put("/burgers/:id", parseUrlEncoded, (req, res) => {
    burger.updateOne(
        req.params.id, {devoured: req.body.devoured},
        (err, data) => {
            if (!err) return res.end();
            return res.status(500);
        }
    );
});

// Burger delete
router.delete("/burgers/:id", (req, res) => {
    burger.deleteOne(req.params.id, (err, data) => {
        if (!err) return res.end();
        return res.status(500);
    });
});

// Export
// ----------------------------------------

module.exports = router;

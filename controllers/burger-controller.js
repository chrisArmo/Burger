/**
 * Burger Controller
 */

// Dependencies
// ----------------------------------------

const burger = require("../models/burger"),
express = require("express"),
path = require("path");

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
        if (!err) res.render("index", {burgers, devouredBurgers});
        else console.log(err);
    });
});

// Export
// ----------------------------------------

module.exports = router;

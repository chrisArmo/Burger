/**
 * Burger Model
 */

// Dependencies
// ----------------------------------------

const orm = require("../config/orm");

// Burger
// ----------------------------------------

const burger = {};

// Select all burgers
burger.selectAll = (cb) => {
    orm.selectAll("burger", "burger_name", (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Select all burgers
burger.insertOne = (cols, values, cb) => {
    orm.insertOne("burger", cols, values, (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Select all burgers
burger.updateOne = (id, colsVals, cb) => {
    orm.updateOne("burger", id, colsVals, (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Export
// ----------------------------------------

module.exports = burger;

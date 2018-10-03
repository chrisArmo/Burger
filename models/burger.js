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

// Insert one burger
burger.insertOne = (val, cb) => {
    orm.insertOne("burger", "burger_name", val, (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Update one burger
burger.updateOne = (id, colsVals, cb) => {
    orm.updateOne("burger", id, colsVals, (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Delete one burger
burger.deleteOne = (id, cb) => {
    orm.deleteOne("burger", id, (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Export
// ----------------------------------------

module.exports = burger;

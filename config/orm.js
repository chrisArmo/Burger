/**
 * Object-Relational Map
 */

// Dependencies
// ----------------------------------------

const connection = require("./connection"),
{getQuestionMarks} = require("../helpers/query-utility");

// ORM
// ----------------------------------------

const orm = {};

// Select all
orm.selectAll = (table, order, cb) => {
    let query = "SELECT * FROM ?? ORDER BY ??";
    connection.query(query, [table, order], (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Insert one
orm.insertOne = (table, values, cb) => {
    let query = `INSERT INTO ?? VALUES (${getQuestionMarks(values)})`;
    connection.query(query, [table, ...values], (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Update one
orm.updateOne = (table, id, col, val, cb) => {
    let query = "UPDATE ?? SET ?? = ? WHERE id = ?";
    connection.query(query, [table, col, val, id], (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Export
// ----------------------------------------

module.exports = orm;

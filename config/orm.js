/**
 * Object-Relational Map
 */

// Dependencies
// ----------------------------------------

const connection = require("./connection"),
{objectToSql} = require("../helpers/query-utility");

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
orm.insertOne = (table, col, val, cb) => {
    let query = "INSERT INTO ?? (??) ";
    query += "VALUES (?)";
    connection.query(query, [table, col, val], (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Update one
orm.updateOne = (table, id, colsVals, cb) => {
    let query = `UPDATE ?? SET ${objectToSql(colsVals)} WHERE id = ?`;
    connection.query(query, [table, id], (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Delete one
orm.deleteOne = (table, id, cb) => {
    let query = "DELETE FROM ?? WHERE id = ?";
    connection.query(query, [table, id], (err, data) => {
        if (!err) cb(null, data);
        else cb(err);
    });
};

// Export
// ----------------------------------------

module.exports = orm;

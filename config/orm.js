/**
 * Object-Relational Map
 */

// Dependencies
// ----------------------------------------

const connection = require("./connection"),
{getQuestionMarks,
getDoubleQuestionMarks, 
objectToSql} = require("../helpers/query-utility");

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
orm.insertOne = (table, cols, values, cb) => {
    let query = `INSERT INTO ?? (${getDoubleQuestionMarks(cols)}) `;
    query += `VALUES (${getQuestionMarks(values)})`;
    connection.query(query, [table, cols.toString(), values.toString()], (err, data) => {
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

// Export
// ----------------------------------------

module.exports = orm;

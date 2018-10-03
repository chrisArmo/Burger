/**
 * MySQL Connection Setup
 */

// Dependencies
// ----------------------------------------

const mysql = require("mysql");

// Connection
// ----------------------------------------

let connection;

// Create connection
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database: "burger_www",
        socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
    });
}

// Connect to mysql
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export
// ----------------------------------------

module.exports = connection;

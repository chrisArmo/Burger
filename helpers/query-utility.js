/**
 * Query Utility
 */

// Functions
// ----------------------------------------

// Create sql value string
const objectToSql = (obj) => {
    const sqlPairs = [];
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];
            if (typeof value === "string" && value.indexOf(" ") > -1) {
                value = `"${value}"`;
            }
            sqlPairs.push(`${key}=${value}`);
        }
    }
    return sqlPairs.toString();
};

// Export
// ----------------------------------------

module.exports = {
    objectToSql
};

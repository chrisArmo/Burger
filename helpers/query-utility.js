/**
 * Query Utility
 */

// Functions
// ----------------------------------------

// Create question marks
const getQuestionMarks = (items) => items.map((_) => "?").join(", ");

// Create double question marks
const getDoubleQuestionMarks = (items) => items.map((_) => "??").join(", ");

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
    getQuestionMarks,
    getDoubleQuestionMarks,
    objectToSql
};

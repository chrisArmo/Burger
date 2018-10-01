/**
 * Query Utility
 */

// Functions
// ----------------------------------------

// Create question marks
const getQuestionMarks = (values) => {
    return values.map((value) => "?").join(", ");
};

// Export
// ----------------------------------------

module.exports = getQuestionMarks;

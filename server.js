/**
 * Burger Server
 */

// Dependencies
// ----------------------------------------

const express = require("express"),
hbs = require("express-handlebars"),
path = require("path"),
router = require("./controllers/burger-controller");

// Components
// ----------------------------------------

// Server port
const PORT = process.env.PORT || 3000,
// Express app
app = express();

// Setup
// ----------------------------------------

// Set view engine
app.engine("hbs", hbs({defaultLayout: "main", extname: ".hbs"}));
app.set("view engine", "hbs");

// Set router public directory
app.use(express.static(path.resolve(__dirname, "public")));

// Routes
// ----------------------------------------

app.use(router);

// Listen
// ----------------------------------------

app.listen(PORT, () => {
    console.log(`Burger app running on port ${PORT}`);
});

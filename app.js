const express = require("express");
const app = express();
// import routes
const indexRouter = require("./routes/index");
const itemsRouter = require("./routes/items");
const categoriesRouter = require("./routes/categories");

// middleware (goes first than routes)
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: false })); // for parsing application/x-www-form-urlencoded

// define routes
app.use("/", indexRouter);
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);

module.exports = app;

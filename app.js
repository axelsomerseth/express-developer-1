const express = require("express");
const app = express();

// import routes
const indexRouter = require("./routes/index");
const itemsRouter = require("./routes/items");
const categoriesRouter = require("./routes/categories");

// define routes
app.use("/", indexRouter);
app.use("/items", itemsRouter);
app.use("/categories", categoriesRouter);

module.exports = app;

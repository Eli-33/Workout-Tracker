// server Dependencies
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

// Create an instance of express
const app = express();
// set the port for app, process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

app.use(logger("dev"));

// body parser can handle the post requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Host Static files let the CSS and JS files can be retrieved
app.use(express.static("public"));

var MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://Learning-Mongodb:0oRn2gn0yRCvJ8nP@cluster0.fhkvl.mongodb.net/test";
mongoose.connect(MONGODB_URL,{
    useNewUrlParser:true,
    userFindAndModify:false
})

require("./routes/apiRoutes")(app);
require("./routes/htmlRouts")(app);


app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
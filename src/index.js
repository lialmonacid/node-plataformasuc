const express = require("express");
const app = express();
const path = require("path");
//const ejs = require("ejs");
//const morgan = require("morgan");

// Express module is minimalistic and flexible framework of Node.js web applications. It deliver a set of solid features for web and mobile applications.
// Ejs module is a simple templating language that lets you generate HTML markup with plain JavaScript.

// Settings
app.set("port",3300);
app.set("view engine","ejs"); // Template engine
app.set("views",path.join(__dirname,"views"));
app.engine("html",require("ejs").renderFile);

// Middlewares. Functions that are executed first than the Routes process something.

// Routes.
app.use(require("./routes/index"));

// Static files.
app.use(express.static(path.join(__dirname,"public")));

// listening the server
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"))
});
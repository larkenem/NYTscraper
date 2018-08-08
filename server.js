//Dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");
var logger = require("morgan");

//Requiring Comment and Article
var Comment = require("./models/Comment.js");
var Article = require("./models/Article.js");

//Scraping tools
var axios = require("axios");
var cheerio = require("cheerio");


mongoose.Promise = Promise;

var port = process.env.PORT || 3000

var app = express();


app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//Database config with Mongoose -- need to figure this all out
mongoose.connect("");
var db = mongooose.connection;

//var router = express.Router();

db.on("error", function(error) {
    console.log("Mongoose Error: ", error)
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
  });

  
require("./config/routes")(router);

app.use(express.static(__dirname + "/public"));

app.engine("handlebars", expressHandlebars({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({
  extended: false
}));

//app.use(router);

//var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoheadlines";
/
mongoose.connect("mongodb://localhost/mongoheadlines");

app.listen(PORT, function() {
  console.log("Listening on port:" + PORT);
});
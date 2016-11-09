var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//controllers
var hospitalController = require("./controllers/hospitalController");

//Express request pipeline
var app = express();
app.use(express.static(path.join(__dirname, "../app/dist")));
app.use(bodyParser.json())
app.use("/api", hospitalController);

app.listen(8080, function () {
    console.log("Started listening on port", 8080);
});

mongoose.connect("mongodb://localhost/hospitalfinder");

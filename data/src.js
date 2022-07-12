"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var app = express();
var path = require('./data');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/user', path);
app.set("port", 3000);
var uri = "mongodb://0.0.0.0:27017/infodb";
mongoose.connect(uri);
var connection = mongoose.connection;
connection.once("open", function () {
    console.log("database connected");
});
app.listen(app.get("port"), function () {
    console.log("app listing..", app.get("port"));
});

"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    name: String,
    age: Number,
    email: String
});
var usermodel = (0, mongoose_1.model)('users', schema);
module.exports = usermodel;

var express = require("express");
var router = express.Router();
var user = require('./users');
router.post('/createuser', function (req, res) {
    var users = req.body;
    console.log("name", users.name);
    console.log("age", users.age);
    console.log("email", users.email);
    user.create(users).then(function (userdata, err) {
        if (err) {
            console.log("user not created");
        }
        else {
            res.send(userdata);
        }
    });
});
router.get('/fetch', function (req, res) {
    var userName = req.body;
    user.find({ "name": userName.name }, { "__v": 0 }, function (er, pass) {
        if (er) {
            console.log("not found");
        }
        else {
            res.send(pass);
        }
    });
});
router.get('/fetch_all', function (req, res) {
    var userName = req.body;
    user.find({}, { "name": 1, "age": 1, "email": 1, "_id": 0 }, function (er, pass) {
        if (er) {
            console.log("not found");
        }
        else {
            res.send(pass);
        }
    });
});
router.put('/update', function (req, res) {
    var uservalue = req.body;
    var filter = { "_id": uservalue._id };
    var update = { "age": uservalue.age, "email": uservalue.email };
    user.findOneAndUpdate(filter, update, function (er, done) {
        if (er) {
            console.log("not found");
        }
        else {
            res.send(done);
        }
    });
});
router["delete"]('/delete', function (req, res) {
    var uservalue = req.body;
    user.deleteOne({ "name": uservalue.name }, function (er, pass) {
        if (er) {
            console.log("not found");
        }
        else {
            res.send(pass);
        }
    });
});
module.exports = router;

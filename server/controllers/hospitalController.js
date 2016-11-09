var mongoose = require("mongoose");
var Hospital = require("../data/hospital");
var _ = require("underscore");

var router = require("express").Router();
router.route("/hospitals/:id?").get(getHospitals).post(addHospital).delete(deleteHospital);

function getHospitals(req, res) {
    Hospital.find(function (err, hospitals) {
        if (err)
            res.send(err);
        else
            res.json(hospitals);
    });
}

function addHospital(req, res) {
    var hospital = new Hospital(_.extend({}, req.body));
    hospital.save(function (err) {
        if (err)
            res.send(err);
        else
            res.json(hospital);
    });
}

function deleteHospital(req, res) {
    var id = req.params.id;
    Hospital.remove({ _id: id }, function (err, removed) {
        if (err)
            res.send(err)
        else
            res.json(removed);
    });
}

module.exports = router;

var dispatcher = require("../dispatcher");
var hospitalService = require("../services/hospitalService");

function HospitalStore() {
    var listeners = [];

    function onChange(listener) {
        getHospitals(listener);
        listeners.push(listener);
    }

    function getHospitals(cb){
        hospitalService.getHospitals().then(function (res) {
            cb(res);
        });
    }

    function addHospital(hospital) {
        hospitalService.addHospital(hospital).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function deleteHospital(hospital) {
        hospitalService.deleteHospital(hospital).then(function (res) {
            console.log(res);
            triggerListeners();
        });
    }

    function triggerListeners() {
        getHospitals(function (res) {
            listeners.forEach(function (listener) {
                listener(res);
            });
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "hospital") {
            switch (split[1]) {
                case "addHospital":
                    addHospital(payload.hospital);
                    break;
                case "deleteHospital":
                    deleteHospital(payload.hospital);
                    break;
            }
        }
    });

    return {
        onChange: onChange
    }
}

module.exports = HospitalStore();

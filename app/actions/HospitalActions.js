var dispatcher = require("../dispatcher");

module.exports = {
    addHospital:function(hospital){
        dispatcher.dispatch({
           hospital:hospital,
           type:"hospital:addHospital"
        });
    },
    Hospital:function(hospital){
        dispatcher.dispatch({
           hospital:hospital,
           type:"hospital:deleteHospital" 
        });
    }
}

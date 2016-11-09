var React = require("react");
var ReactDOM = require("react-dom");
var HospitalsList = require("./components/HospitalsList.jsx");
var hospitalsStore = require("./stores/hospitalsStore");
var _hospitals = [];
var getHospitalsCallback = function(hospitals){
    _hospitals = hospitals;
    render();
};
hospitalsStore.onChange(getHospitalsCallback);

function render(){
    ReactDOM.render(<HospitalsList hospitals={_hospitals} />, document.getElementById("container"));    
}

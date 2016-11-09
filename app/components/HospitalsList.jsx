var React = require("react");
var HospitalInfo = require("./HospitalInfo.jsx")
var AddHospital = require("./AddHospital.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddHospital />
                </div>
                <div className="col-md-6">
                    {
                        this.props.hospitals.map(function(s,index){
                            return(
                                <HospitalInfo info={s} key={"hospital"+index} />
                            )
                        })
                    }
                </div>
           </div>
       )
   }
});

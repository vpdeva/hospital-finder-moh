var React = require("react");
var actions = require("../actions/HospitalActions");

module.exports = React.createClass({
    deleteHospital: function(e){
        e.preventDefault();
        actions.deleteHospital(this.props.info);
    },
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    {this.props.info.name}
                    <span className="pull-right text-uppercase delete-button" onClick={this.deleteHospital}>&times;</span>
                </div>
                <div className="panel-body">{this.props.info.tagline}</div>
            </div>
        )
    }
})

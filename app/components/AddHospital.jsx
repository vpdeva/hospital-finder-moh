var React = require("react");
var actions = require("../actions/HospitalActions");

module.exports = React.createClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }
    },
    addHospital:function(e){
        e.preventDefault();
        actions.addHospital(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },
    render:function(){
        return(
            <form className="form" onSubmit={this.addHospital}>
                <div className="form-group">
                    <label className="control-label" htmlFor="name">Hospital Name:</label>
                    <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Hospital Name" />
                </div>
                <div className="form-group">
                    <label className="control-label" htmlFor="tagline">Tagline:</label>
                    <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Tagline" />
                </div>
                <div className="form-group">
                    <button className="btn" type="submit">Add Hospital</button>
                </div>
            </form>
        )
    }
})

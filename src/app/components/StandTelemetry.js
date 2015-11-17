import React from 'react';
const Paper = require('material-ui/lib/paper');
const FlatButton = require('material-ui/lib/flat-button');
import {Link} from 'react-router';


const StandTelemetry = React.createClass({

 _handleTouchTap(){
  this.props.history.pushState(null,'/standinfo/'+this.props.data.name);
 },

  render(){
    let containerStyle = {
      display: 'inline-block',
      width: '200px',
      height: '100px',
      margin: '25px'
    };

    let paperStyle = {
      textAlign: 'center'
    };

    var StandTelemItem = this;

    return(
      <div style={containerStyle}>
        <Paper zDepth={2} style={paperStyle}>
          <FlatButton label={this.props.data.name} onTouchTap={this._handleTouchTap}/>
          <p>Status: {this.props.data.status}</p>
          <p>Health: {this.props.data.health}</p>
        </Paper>
      </div>
    );
  }
});

module.exports = StandTelemetry;

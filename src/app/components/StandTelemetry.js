import React from 'react';
const Paper = require('material-ui/lib/paper');
const FlatButton = require('material-ui/lib/flat-button');


const StandTelemetry = React.createClass({
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

    return(
      <div style={containerStyle}>
        <Paper zDepth={1} style={paperStyle}>
          <FlatButton label={this.props.data.name} />
          <p>Status: {this.props.data.status}</p>
          <p>Health: {this.props.data.health}</p>
        </Paper>
      </div>
    );
  }
});

module.exports = StandTelemetry;

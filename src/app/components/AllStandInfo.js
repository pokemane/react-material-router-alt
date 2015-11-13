import React from 'react';
import StandTelemetry from './StandTelemetry';


const AllStandInfo = React.createClass({

  telemetryItems: [
    {
      name: 'TC01A',
      status: 'testing',
      health: 95
    },
    {
      name: 'TC01B',
      status: 'testing',
      health: 83
    },
    {
      name: 'TC02A',
      status: 'testing',
      health: 50
    },
    {
      name: 'TC04A',
      status: 'Off test',
      health: 100
    },
    {
      name: 'TC01A',
      status: 'testing',
      health: 95
    },
    {
      name: 'TC01B',
      status: 'testing',
      health: 83
    },
  ],

  render() {
    let containerStyle = {
      textAlign: 'center'
    };

    return(
      <div style={containerStyle}>
        <div style={{height:'100px'}} />
        {this.telemetryItems.map(function(telemetryItem){
          return <StandTelemetry data={telemetryItem} />;
        })}
      </div>
    );
  }
});

module.exports = AllStandInfo;

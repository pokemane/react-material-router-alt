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
      name: 'TC07A',
      status: 'testing',
      health: 95
    },
    {
      name: 'TC09A',
      status: 'testing',
      health: 95
    },
  ],

  render() {
    let containerStyle = {
      textAlign: 'center'
    };

    let allStandInfo = this;

    return(
      <div style={containerStyle}>
        <div style={{height:'100px'}} />
        {this.telemetryItems.map(function(telemetryItem){
          return <StandTelemetry data={telemetryItem} key={telemetryItem.name} history={allStandInfo.props.history} />;
        })}
      </div>
    );
  }
});

module.exports = AllStandInfo;

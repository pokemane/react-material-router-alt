import React from 'react';

const StandInfo = React.createClass({
  render(){
    return(
      <div>
        <h2>Stand Info</h2>
        {this.props.children}
      </div>
    );
  }
});

module.exports = StandInfo;

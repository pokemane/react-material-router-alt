import React from 'react';

const StandInfo = React.createClass({
  render(){
    return(
      <div>
        <div className="Toolbar">
         {this.props.toolbar}
        </div>
        <div className="Main">
         {this.props.main}
        </div>
      </div>
    );
  }
});

module.exports = StandInfo;

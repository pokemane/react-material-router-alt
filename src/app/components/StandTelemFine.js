import React from 'react';


const StandTelemFine = React.createClass({
 render(){
  return(
   <div>
    <p>{this.props.params.id}</p>
   </div>
  );
 }
});

module.exports = StandTelemFine;

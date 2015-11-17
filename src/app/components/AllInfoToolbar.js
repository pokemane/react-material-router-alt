import React from 'react';
const Toolbar = require('material-ui/lib/toolbar/toolbar');
const ToolbarTitle = require('material-ui/lib/toolbar/toolbar-title');
const ToolbarSeparator = require('material-ui/lib/toolbar/toolbar-separator');
const ToolbarGroup = require('material-ui/lib/toolbar/toolbar-group');
const DropDownMenu = require('material-ui/lib/drop-down-menu');
const FontIcon = require('material-ui/lib/font-icon');

const AllInfoToolbar = React.createClass({
 render(){

  let filterOptions = [
   { text: 'Sort by...', disabled: true },
   { text: 'Stand ID' },
   { text: 'Status' },
   { text: 'Health' }
  ];

  return(
   <Toolbar>
    <ToolbarGroup>
     <ToolbarTitle text="All Stands" />
     <ToolbarSeparator />
    </ToolbarGroup>

    <ToolbarGroup float="right">
     <ToolbarTitle text="Options" />
     <DropDownMenu menuItems={filterOptions} />
    </ToolbarGroup>
   </Toolbar>
  );
 }
});

module.exports = AllInfoToolbar;

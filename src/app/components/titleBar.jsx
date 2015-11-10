const AppBar = require('material-ui/lib/app-bar');
const React = require('react');
const IconMenu = require('material-ui/lib/menus/icon-menu');
const IconButton = require('material-ui/lib/icon-button');
const MenuItem = require('material-ui/lib/menus/menu-item');
const MenuDivider = require('material-ui/lib/menus/menu-divider');
const LeftNav = require('material-ui/lib/left-nav');
const FlatButton = require('material-ui/lib/flat-button');
const Menu = require('material-ui/lib/menus/menu');
const MoreVertIcon =require('material-ui/lib/svg-icons/navigation/more-vert');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

import { Link } from 'react-router';

const TitleBar = React.createClass({

 //the key passed through context must be called "muiTheme"
 childContextTypes: {
  muiTheme: React.PropTypes.object,
 },

 menuItems: [
  { route: 'button', text: 'Get Started', id: 0 },
  { route: 'main', text: 'Customization', id: 1 },
  { route: 'components', text: 'Components', id: 2 },
  { text: 'Resources', id: 3 },
  {
   payload: 'https://github.com/callemall/material-ui',
   text: 'GitHub',
   id: 4
  },
  {
     text: 'Disabled',
     disabled: true,
     id: 5
  },
  {
     payload: 'https://www.google.com',
     text: 'Disabled Link',
     disabled: true,
     id: 6
  },
],

 getInitialState () {
   return {
     muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
     selectedItem: "Main Menu"
   };
 },

 getChildContext(){
  return{
   muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
  };
 },

 componentDidMount(){

 },

 _handleLeftNavToggle(e){
   this.refs.leftNav.toggle();
 },

 _handleMenuTouch(item,e){
  this.setState({selectedItem: item.text});
  this.refs.leftNav.toggle();
 },

 _onLeftNavChange(e, key, payload) {
  this.props.history.pushState(null, payload.route);
 },

//the app bar and button will receive our theme through
//context and style accordingly
 render(){
  var titleBarObj = this;
  return(
   <div>
    <AppBar
     title={this.state.selectedItem}
     showMenuIconButton={true}
     onLeftIconButtonTouchTap={titleBarObj._handleLeftNavToggle} />
    <LeftNav ref="leftNav" docked={false} onChange={this._onLeftNavChange} menuItems={this.menuItems}/>
    {this.props.children}
   </div>
  );
 }



});

module.exports = TitleBar;

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
  { route: 'home', text: 'Home', id: 0 },
  { route: 'standinfo', text: 'Stand Info', id: 1 },
],

 getInitialState () {
   return {
     selectedItem: "Home"
   };
 },

 getChildContext(){

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
     <LeftNav ref="leftNav" docked={false} >
      {this.menuItems.map(function(menuItem){
       return <MenuItem key={menuItem.id}
        primaryText={menuItem.text}
        disabled={menuItem.disabled}
        onTouchTap={titleBarObj._handleMenuTouch.bind(titleBarObj,{text: menuItem.text})} />;
      })}
     </LeftNav>
    {this.props.children}
   </div>
  );
 }



});

module.exports = TitleBar;

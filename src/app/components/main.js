const React = require('react');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

const TitleBar = require('./TitleBar');

const Main = React.createClass({

 childContextTypes: {
   muiTheme: React.PropTypes.object
 },

 getInitialState () {
   return {
     muiTheme: ThemeManager.getMuiTheme(LightRawTheme),
   };
 },

 getChildContext() {
   return {
     muiTheme: this.state.muiTheme,
   };
 },

  componentWillMount() {

  },

  render() {
    return (
      <div>
       <TitleBar history={this.props.history}/>
       {this.props.children}
      </div>
    );
  },

});

module.exports = Main;

/** In this file, we create a React component which incorporates components provided by material-ui */

const React = require('react');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

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
   //how to modify parts of the raw theme
    /*let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.red500
    });

    this.setState({muiTheme: newMuiTheme});*/
  },

  render() {
   /*
    let containerStyle = {
      textAlign: 'center',
      paddingTop: '200px'
    };

    let standardActions = [
      { text: 'Okay' },
      { text: 'Not okay' }
    ];
    */
    return (
      <div>
       This is the MAIN COMPONENT
       {this.props.children}
      </div>
    );
  },

});

module.exports = Main;

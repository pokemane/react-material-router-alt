const React = require('react');
const RaisedButton = require('material-ui/lib/raised-button');
const Dialog = require('material-ui/lib/dialog');
const ThemeManager = require('material-ui/lib/styles/theme-manager');
const LightRawTheme = require('material-ui/lib/styles/raw-themes/light-raw-theme');

const HomeButton = React.createClass({

 render() {

   let containerStyle = {
     textAlign: 'center',
     paddingTop: '200px'
   };

   let standardActions = [
     { text: 'Okay' },
     { text: 'Not okay' }
   ];

   return (
     <div style={containerStyle}>
       <Dialog
         title="Super Secret Password"
         actions={standardActions}
         ref="superSecretPasswordDialog">
         1-2-3-4-5
       </Dialog>
       <h1>material-ui</h1>
       <h2>{this.props.text}</h2>
       <RaisedButton label="Super Secret Password" primary={true} onTouchTap={this._handleTouchTap} />
     </div>
   );
 },

 _handleTouchTap() {
   this.refs.superSecretPasswordDialog.show();
 }

});

module.exports = HomeButton;

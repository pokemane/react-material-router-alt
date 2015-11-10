import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';

let injectTapEventPlugin = require('react-tap-event-plugin');
import createBrowserHistory from 'history/lib/createBrowserHistory';

import Main from './components/Main.jsx';
import HomeButton from './components/HomeButton.jsx';

import AppRoutes from './routes.jsx';

//Needed for React Developer Tools
window.React = React;
window.Perf = require('react-addons-perf');

let history = createBrowserHistory();

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
//ReactDOM.render(<Main><HomeButton /></Main>, document.getElementById('app'));

ReactDOM.render(<Router history={history}>{AppRoutes}</Router>, document.getElementById('app'));

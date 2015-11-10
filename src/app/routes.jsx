import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Main from './components/Main.jsx';
import HomeButton from './components/HomeButton.jsx';
import TitleBar from './components/TitleBar.jsx';

export default (
  <Route path="/" component={TitleBar}>
   <IndexRoute component={Main} />
   <Route path="button" component={HomeButton} />
   <Route path="main" component={Main} />
  </Route>
);

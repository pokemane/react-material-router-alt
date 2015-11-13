import React from 'react';
import {Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import HomeButton from './components/HomeButton';
import StandInfo from './components/StandInfo';
import AllStandInfo from './components/AllStandInfo';

export default (
  <Route path="/" component={Main}>
   <IndexRoute component={HomeButton} />
   <Route path="home" component={HomeButton} />
   <Route path="standinfo" component={StandInfo}>
    <IndexRoute component={AllStandInfo} />
    <Route path="all" component={AllStandInfo} />
   </Route>
  </Route>
);

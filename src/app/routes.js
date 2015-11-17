import React from 'react';
import {Route, IndexRoute } from 'react-router';
import Main from './components/Main';
import HomeButton from './components/HomeButton';
import StandInfo from './components/StandInfo';
import AllStandInfo from './components/AllStandInfo';
import AllInfoToolbar from './components/AllInfoToolbar';
import StandTelemFine from './components/StandTelemFine';
import FineInfoToolbar from './components/FineInfoToolbar';

export default (
  <Route path="/" component={Main}>
   <IndexRoute component={HomeButton} />
   <Route path="home" component={HomeButton} />
   <Route path="standinfo" component={StandInfo}>
    <IndexRoute components={{main: AllStandInfo, toolbar: AllInfoToolbar}} />
    <Route path="all" components={{main: AllStandInfo, toolbar: AllInfoToolbar}} />
    <Route path=":id" components={{main: StandTelemFine, toolbar: FineInfoToolbar}} />
   </Route>
  </Route>
);

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import PortalPage from './page/Portal_Page';
import AmazonPage from './page/Amazon_Page';
import CanyonPage from './page/Grand_Canyon';

require('velocity-animate');
require('velocity-animate/velocity.ui');

injectTapEventPlugin();

// stop aggregate all reducers, but let each page define its own reduer
const BasicUI = () => (
  <Switch>
    <Route key="root" exact={true} path="/" component={PortalPage} />
    <Route key="navigation" path="/navigation" component={AmazonPage} />
    <Route key="natural" path="/natural" component={CanyonPage} />
  </Switch>
);

ReactDOM.render((
  <BrowserRouter>
    <BasicUI />
  </BrowserRouter>
), document.getElementById('container'));

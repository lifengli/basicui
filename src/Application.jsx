import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter} from 'react-router-dom';

import injectTapEventPlugin from 'react-tap-event-plugin';

import PortalPage from './page/Portal_Page';
import AmazonPage from './page/Amazon_Page';

require('velocity-animate');
require('velocity-animate/velocity.ui');

injectTapEventPlugin();

// stop aggregate all reducers, but let each page define its own reduer
// as well as store instance, which will be passed to child component via context
const BasicUI = () => (
  <Switch>
    <Route key="root" exact={true} path="/" component={PortalPage} />
    <Route key="navigation" path="/navigation" component={AmazonPage} />
  </Switch>
);

ReactDOM.render((
  <BrowserRouter>
    <BasicUI />
  </BrowserRouter>
), document.getElementById('container'));

import _ from 'lodash';

import ReactDOM from 'react-dom';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import {Router, Route, IndexRedirect, Redirect, BrowserRouter} from 'react-router';

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './reducers/root';
import SampleTheme from './themes/SampleTheme';
import HomePage from './containers/Homepage';
import AmazonRainforest from './containers/navigation/Amazon_Rainforest';

require('velocity-animate');
require('velocity-animate/velocity.ui');

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const uiTheme = _.cloneDeep(SampleTheme);

const applicationId = 'basic-ui';

class Application extends PureComponent {
  getChildContext() {
    return {
      applicationId,
      store,
      uiTheme,
      location: this.props.location
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <HomePage />
      </MuiThemeProvider>
    );
  }
}

Application.childContextTypes = {
  applicationId: PropTypes.string,
  store: PropTypes.object,
  uiTheme: PropTypes.object,
  location: PropTypes.object
};

export const router = (
  <Router key="router" history={createBrowserHistory()}>
    <Route key="root" path="/" component={Application}>
      <Route key="navigation" path="navigation" component={AmazonRainforest} />
    </Route>
  </Router>
);

ReactDOM.render(router, document.getElementById('container'));

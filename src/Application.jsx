import _ from 'lodash';

import ReactDOM from 'react-dom';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import { createBrowserHistory } from 'history';
import {Router, Route, Switch, BrowserRouter} from 'react-router-dom';

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './reducers/root';
import SampleTheme from './themes/SampleTheme';
import HomePage from './containers/Homepage';
import AmazonPage from './page/Amazon_Page';

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

Application.PropTypes = {
  location: PropTypes.object
};

const BasicUI = () => (
  <Switch>
    <Route key="root" exact={true} path="/" component={Application} />
    <Route key="navigation" path="/navigation" component={AmazonPage} />
  </Switch>
);

ReactDOM.render((
  <BrowserRouter>
    <BasicUI />
  </BrowserRouter>
), document.getElementById('container'));

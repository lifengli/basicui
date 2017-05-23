import _ from 'lodash';

import ReactDOM from 'react-dom';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import reducer from './reducers/root';
import SampleTheme from './themes/SampleTheme';
import HomePage from './containers/Homepage';

require('velocity-animate');
require('velocity-animate/velocity.ui');

injectTapEventPlugin();

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const uiTheme = _.cloneDeep(SampleTheme);

class Application extends PureComponent {
  getChildContext() {
    return {
      store,
      uiTheme
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
  store: PropTypes.object,
  uiTheme: PropTypes.object
};

ReactDOM.render(<Application />, document.getElementById('container'));

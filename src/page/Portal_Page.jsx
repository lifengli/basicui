import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducer from '../reducers/homepage';
import SampleTheme from '../themes/SampleTheme';
import HomePage from '../containers/Homepage';

// each page handle its own reducer and store instance
// tbd: only top level props need to be shared from common reducer
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const uiTheme = _.cloneDeep(SampleTheme);

const applicationId = 'basic-ui';

export default class PortalPage extends PureComponent {
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

PortalPage.childContextTypes = {
  applicationId: PropTypes.string,
  store: PropTypes.object,
  uiTheme: PropTypes.object,
  location: PropTypes.object
};

PortalPage.PropTypes = {
  location: PropTypes.object
};

import _ from 'lodash';

import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import reducer from '../reducers/root';
import SampleTheme from '../themes/SampleTheme';
import AmazonRainforest from '../containers/navigation/Amazon_Rainforest';

// need to re-write this to inherit from Application
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
const store = createStoreWithMiddleware(reducer);
const uiTheme = _.cloneDeep(SampleTheme);

export default class AmazonPage extends PureComponent {
  getChildContext() {
    return {
      store,
      uiTheme,
      location: this.props.location
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <AmazonRainforest />
      </MuiThemeProvider>
    );
  }
}

AmazonPage.childContextTypes = {
  store: PropTypes.object,
  uiTheme: PropTypes.object,
  location: PropTypes.object
};

AmazonPage.propTypes = {
  location: PropTypes.object
};

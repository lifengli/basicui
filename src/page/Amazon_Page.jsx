import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {createStoreWithMiddleware} from '../middleware';

import reducer from '../reducers/navigation';
import SampleTheme from '../themes/SampleTheme';
import AmazonRainforest from '../containers/navigation/Amazon_Rainforest';

// each page handle its own reducer and store instance
// tbd: only top level props need to be shared from common reducer
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

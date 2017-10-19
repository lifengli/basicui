import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import {createStoreWithMiddleware} from '../middleware';

import reducer from '../reducers/natural';
import SampleTheme from '../themes/SampleTheme';
import GrandCanyon from '../containers/natural/Grand_Canyon';

// each page handle its own reducer and store instance
// tbd: only top level props need to be shared from common reducer
const store = createStoreWithMiddleware(reducer);
const uiTheme = _.cloneDeep(SampleTheme);

export default class CanyonPage extends PureComponent {
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
        <GrandCanyon />
      </MuiThemeProvider>
    );
  }
}

CanyonPage.childContextTypes = {
  store: PropTypes.object,
  uiTheme: PropTypes.object,
  location: PropTypes.object
};

CanyonPage.propTypes = {
  location: PropTypes.object
};

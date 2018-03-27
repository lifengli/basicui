import _ from 'lodash';
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import provider from './provider';
import reducer from './reducers/root';
import SampleTheme from './themes/SampleTheme';
import {createStoreWithMiddleware} from './middleware';

import PortalPage from './containers/Homepage';
import AmazonPage from './containers/navigation/Amazon_Rainforest';
import CanyonPage from './containers/natural/Grand_Canyon';

const store = createStoreWithMiddleware(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const applicationId = 'basic-ui';
const uiTheme = _.cloneDeep(SampleTheme);

const BasicUI = () => (
  <BrowserRouter>
    <Switch>
      <Route key="root" exact={true} path="/" component={PortalPage} />
      <Route key="navigation" path="/navigation" component={AmazonPage} />
      <Route key="natural" path="/natural" component={CanyonPage} />
    </Switch>
  </BrowserRouter>
);

export default class Application extends PureComponent {
  getChildContext() {
    return {
      applicationId,
      uiTheme,
      location: this.props.location
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <BasicUI />
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

ReactDOM.render(
  provider(store)(Application),
  document.getElementById('root')
);

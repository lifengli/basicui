import Immutable from 'immutable';
import { createReducer } from 'redux-act';

import {
  homepageLayout,
  requestHomepageContent,
  receiveHomepageContent
} from '../actions/homepage';

const defaultState = Immutable.fromJS({
  title: 'Home Page',
  pageContent: null,
  pageLayout: null
});

const reducer = createReducer({
  [homepageLayout]: (state, params) => state.mergeDeep({
    creatingConnection: true,
    pageLayout: params
  }),
  [requestHomepageContent]: (state) => state.mergeDeep({
    requestingConnections: true
  }),
  [receiveHomepageContent]: (state, resp) => {
    return state.delete('pageContent').mergeDeep({
      requestingConnections: false,
      pageContent: resp
    });
  }
}, defaultState);

export default reducer;

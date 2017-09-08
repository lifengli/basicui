import Immutable from 'immutable';
import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';

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

const homepage = createReducer({
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

const reducer = combineReducers({
  homepage
});

export default reducer;

import Immutable from 'immutable';
import { createReducer } from 'redux-act';
import { combineReducers } from 'redux';

import {
  getNavigationMap,
  requestNavigationContent,
  receiveNavigationContent
} from '../actions/navigation';

const defaultState = Immutable.fromJS({
  title: 'Navigation Page',
  navigationContent: null,
  navigationMap: null
});

const navigation = createReducer({
  [getNavigationMap]: (state, params) => state.mergeDeep({
    creatingConnection: true,
    navigationMap: params
  }),
  [requestNavigationContent]: (state) => state.mergeDeep({
    requestingConnections: true
  }),
  [receiveNavigationContent]: (state, resp) => {
    return state.delete('navigationContent').mergeDeep({
      requestingConnections: false,
      navigationContent: resp
    });
  }
}, defaultState);

const reducer = combineReducers({
  navigation
});

export default reducer;

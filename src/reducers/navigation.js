import Immutable from 'immutable';
import { createReducer } from 'redux-act';

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

const reducer = createReducer({
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

export default reducer;

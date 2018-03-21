import Immutable from 'immutable';
import { createReducer } from 'redux-act';

import {
  getNaturalMap,
  requestNaturalContent,
  receiveNaturalContent
} from '../actions/natural';

const defaultState = Immutable.fromJS({
  title: 'Natural Page',
  naturalContent: null,
  naturalMap: null
});

const reducer = createReducer({
  [getNaturalMap]: (state, params) => state.mergeDeep({
    creatingConnection: true,
    naturalMap: params
  }),
  [requestNaturalContent]: (state) => state.mergeDeep({
    requestingConnections: true
  }),
  [receiveNaturalContent]: (state, resp) => {
    return state.delete('naturalContent').mergeDeep({
      requestingConnections: false,
      naturalContent: resp
    });
  }
}, defaultState);

export default reducer;

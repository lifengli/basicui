import {combineReducers} from 'redux';

import homepage from './homepage';
import navigation from './navigation';

const reducer = combineReducers({
  homepage,
  navigation
});

export default reducer;

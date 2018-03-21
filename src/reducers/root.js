import {combineReducers} from 'redux';

import homepage from './homepage';
import navigation from './navigation';
import natural from './natural';

const reducer = combineReducers({
  homepage,
  navigation,
  natural
});

export default reducer;

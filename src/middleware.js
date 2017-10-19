import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export {createStoreWithMiddleware};

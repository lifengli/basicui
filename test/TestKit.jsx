import _ from 'lodash';

import TestUtils from 'react-addons-test-utils';

import chai from 'chai';
import sinonChai from 'sinon-chai';

import thunkMiddleware from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from './../src/reducers/root';
import SampleTheme from './../src/themes/SampleTheme';

chai.use(sinonChai);

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
export const store = createStoreWithMiddleware(reducer);
export const uiTheme = _.cloneDeep(SampleTheme);

export function renderShallow(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component, {store, uiTheme});
  return renderer.getRenderOutput();
}

export function createShallowRenderer(component) {
  const renderer = TestUtils.createRenderer();
  renderer.render(component, {store, uiTheme});
  return renderer;
}

export function getInstance(renderer) {
  return _.get(renderer, '_instance._instance');
}

export function getState(renderer) {
  return renderer._instance._instance.state;
}

import { applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import * as rootActions from './actions'
import rootReducer from './reducers';
import rootApi from './apis/root';
import createStoreFactory from './store/factory';
import createApi from './apis/factory';
import actionsFactory from './actions/factory'
let api;
const middleware = [
  thunk
];

let enhancers = [];

enhancers.push(window.devToolsExtension());

const store = createStoreFactory.createStore(
  rootReducer,
  {},
  middleware,
  enhancers,
);

const actions = actionsFactory.createActions(store, rootActions);

api = createApi(store, actions, rootApi);

export default api;

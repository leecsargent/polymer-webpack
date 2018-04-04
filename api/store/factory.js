import {applyMiddleware, compose, createStore as createReduxStore} from 'redux';

/**
 * Factory for creating redux store
 * @param {Object} reducers - composed reducer object
 * @param {Object} initialState - initial state object
 * @param {Array} middlewareStack - Array of redux middleware functions
 * @param {Array} storeEnhancers - Array of additional store enhancers
 */
export function createStore(reducers, initialState, middlewareStack, storeEnhancers) {
  let enhancers;

  if (storeEnhancers && storeEnhancers.length) {
    enhancers = compose(
      applyMiddleware(...middlewareStack),
      ...storeEnhancers
    );
  } else {
    enhancers = compose(
      applyMiddleware(...middlewareStack)
    );
  }

  return createReduxStore(
    reducers,
    initialState,
    enhancers
  );
}

export default {
  createStore,
};

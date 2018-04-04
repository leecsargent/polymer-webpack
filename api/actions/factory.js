import { bindActionCreators } from 'redux';

export function createActions(store, rootActions) {
  let actions = {};

  Object.keys(rootActions).forEach(key => {
    actions[key] = bindActionCreators(rootActions[key], store.dispatch);
  });

  return actions;
}

export default {
  createActions,
}

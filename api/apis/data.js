let _store;
let _actions;
let unsubscribeDataLoader;

const fetchPosts = () => {
  _actions.postActions.fetchPosts()
}

const login = (user, password) => {
  console.log(_actions.authenticationActions)
  _actions.authenticationActions.login(user, password);
};

const _loadAdditionalData = () => {
  console.log('_loadAdditionalData');
}

const loadAppData = () => {
  unsubscribeDataLoader = _store.subscribe(_loadAdditionalData);
  // login('leecsargent@gmail.com','Jessie123');
}

const validateToken = (token) => {
  _actions.authenticationActions.validateToken(token);
}

const init = (store, actions) => {
  _store = store;
  _actions = actions;

  console.log(_actions);
  return {
    fetchPosts,
    loadAppData,
    validateToken,
  }
}


export default init;

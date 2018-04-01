let _store;
let _actions;
let unsubscribeDataLoader;

const fetchPosts = () => {
  _actions.postActions.fetchPosts()
}

const login = (user, password) => {
  _actions.authenticationActions.login(user, password);
};

const setInititialUnauthorized = () => {
  _actions.authenticationActions.setInititialUnauthorized();
};

const _loadAdditionalData = () => {
  //console.log('_loadAdditionalData');
}

const loadAppData = () => {
  unsubscribeDataLoader = _store.subscribe(_loadAdditionalData);
  // login('leecsargent@gmail.com','Jessie123');
}

const verifyToken = (token) => {
  _actions.authenticationActions.verifyToken(token);
}

const init = (store, actions) => {
  _store = store;
  _actions = actions;

  return {
    login,
    fetchPosts,
    loadAppData,
    verifyToken,
    setInititialUnauthorized,
  }
}


export default init;

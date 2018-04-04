const createApi = (store, actions, apis) => {
  let api = {};

  Object.keys(apis).forEach(function(name) {
    var initFunction = apis[name];

    if (initFunction && typeof initFunction === 'function') {
      api[name] = initFunction(store, actions);
    }
  });

  return api;
}

export default createApi;

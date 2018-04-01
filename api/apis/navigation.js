var _store;
var _actions;

function setRoute(routeData) {
  _actions.navigationActions.setRoute(routeData);
}

function setModalClosed() {
  _actions.navigationActions.setModalClosed();
}

function setModalOpen() {
  _actions.navigationActions.setModalOpen();
}

export default function init(store, actions) {
  _store = store;
  _actions = actions;

  return {
    setRoute: setRoute,
    setModalClosed: setModalClosed,
    setModalOpen: setModalOpen,
  };
}

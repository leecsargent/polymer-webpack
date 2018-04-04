var _listeners = [];
var _store;

/**
 * Wrap REDUX state subscriber to give ability to customize
 * Pass state to callback, since we always want to know the current state
 */
function subscribe(listener) {
  if (typeof listener === 'function') {
    _listeners.push(listener);

    // Call listener with current state
    setTimeout(listener);

    return function unsubscribe() {
      var index = _listeners.indexOf(listener);

      if (index !== -1) {
        _listeners.splice(index, 1);
      }
    };
  }
}

/**
 * Redux handler function
 * So we can get state a single time and pass it to all subscribers
 */
function handler() {
  if (_listeners.length) {
    setTimeout(function() {
      _listeners.forEach(function(callback) {
        callback();
      });
    });
  }
}

export default function init(store) {
  _store = store;
  _store.subscribe(handler);

  return {
    getState: _store.getState,
    subscribe: subscribe,
  };
}

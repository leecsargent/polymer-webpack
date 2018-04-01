import { isEqual, get } from 'lodash';
import api from 'api';
let _ = {
  isEqual,
  get,
};




class PostsApp extends Polymer.Element {
  static get is() { return 'posts-app'; }
  static get properties() {
    return {
      authentication: {
        type: Object,
        notify: true,
      },

      user: {
        type: Object,
      },

      navigation: {
        type: Object,
        notify: true,
      },
    }
  }

  static get observers() {
      return [
        '_checkForLoggedInRedirect(authentication.isAuthenticated, authentication.status, navigation.route)',
      ]
  }


  ready() {
    super.ready();
    this.addEventListener('login-submit', function(event) {
      this.set('user', event.detail);
    });

    api.state.subscribe(this._subscribe.bind(this));
  }

  _checkForLoggedInRedirect(isAuthenticated, status, route) {
    var isOnLoginRoute = route[0] === 'login';
    var authStatusReady = status === 'READY';

    if (!isAuthenticated && authStatusReady && !isOnLoginRoute) {
      this._redirect('/login');
    } else if (isAuthenticated && authStatusReady && isOnLoginRoute) {
      this._redirect('/')
    }
  }

  _subscribe() {
    var state = api.state.getState();
    var routeParts = _.get(state, 'navigation.route', []);
    var selector = Polymer.dom(this.root).querySelector('#pageSelector');

    if (!_.isEqual(this.navigation, state.navigation)) {
      this.set('navigation', state.navigation);
      selector.select(routeParts[0] || '');
    }

    if (!_.isEqual(this.authentication, state.authentication)) {
      this.set('authentication', state.authentication);
    }
  }

  _redirect(path) {
    this.dispatchEvent(
      new CustomEvent('set-route', {
        detail: {path: path},
        composed: true,
        bubbles: true
      })
    );
  }
}

window.customElements.define(PostsApp.is, PostsApp);

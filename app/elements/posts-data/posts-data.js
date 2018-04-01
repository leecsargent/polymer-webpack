import api from 'api';

class PostsData extends Polymer.Element {
  static get is() {
    return 'posts-data';
  }

  static get properties() {
    return {
      posts: {
        type: Array,
        notify: true,
        readOnly: true,
      },

      authentication: {
        type: Object,
        notify: true,
        readOnly: true,
      },

      navigation: {
        type: Object,
        notify: true,
      },

      user: {
        type: Object,
        observer: '_onUserChanged',
      }
    }
  }

  ready() {
    super.ready();
    var token = localStorage.getItem('token');

    token ? api.data.verifyToken(token) : api.data.setInititialUnauthorized();


    api.state.subscribe(this._subscribe.bind(this));
  }

  _subscribe(state) {
    var state = api.state.getState();
  }

  _onUserChanged(user) {
    api.data.login(user.email, user.password);
  }
}

window.customElements.define(PostsData.is, PostsData);

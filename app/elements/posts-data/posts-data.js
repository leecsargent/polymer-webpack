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

      user: {
        type: Object,
        observer: '_onUserChanged',
      }
    }
  }

  ready() {
    super.ready();
    console.log('token', localStorage.getItem('token'));
    var token = localStorage.getItem('token');
    console.log(api.data)
    if (token) {
      api.data.validateToken(token);
    }
    api.state.subscribe(this._subscribe.bind(this));
  }

  _subscribe(state) {
    var state = api.state.getState();
    console.log('subscriber in posts-data', state)
  }
}

window.customElements.define(PostsData.is, PostsData);

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
    api.store.dispatch(api.actions.postActions.fetchPosts())
    api.store.subscribe(this._subscribe.bind(this));
  }

  _onUserChanged(user) {
    api.store.dispatch(api.actions.authenticationActions.login(user.email, user.password))
  }

  _subscribe(state) {
    var state = api.store.getState();
    var posts = api.store.getState().posts && api.store.getState().posts.items;

    var authentication = api.store.getState().authentication;
    this._setAuthentication(authentication);
    this._setPosts(posts);
  }
}

window.customElements.define(PostsData.is, PostsData);

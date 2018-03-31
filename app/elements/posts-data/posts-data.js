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
      }
    }
  }

  ready() {
    super.ready();
    api.store.dispatch(api.actions.fetchPosts())
    api.store.subscribe(this._subscribe.bind(this));
  }

  _subscribe(state) {
    var state = api.store.getState();
    var posts = api.store.getState().posts && api.store.getState().posts.items;
    this._setPosts(posts);
  }
}

window.customElements.define(PostsData.is, PostsData);

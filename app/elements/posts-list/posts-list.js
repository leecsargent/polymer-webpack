class PostsList extends Polymer.Element {
  static get is() { return 'posts-list'; }
  static get properties() {
    return {
      posts: Array,
    }
  }
}

window.customElements.define(PostsList.is, PostsList);

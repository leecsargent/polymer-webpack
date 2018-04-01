class PostsAppHeader extends Polymer.Element {
  static get is() { return 'posts-app-header'; }
  static get properties() {
    return {
      authentication: Object,
    }
  }
}

window.customElements.define(PostsAppHeader.is, PostsAppHeader);

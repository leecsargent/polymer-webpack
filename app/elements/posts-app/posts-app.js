import format from 'date-fns/format';

class PostsApp extends Polymer.Element {
  static get is() { return 'posts-app'; }
  static get properties() {
    return {
      today: {
        type: String,
        value: function() {
          return format(new Date(), 'MM/DD/YYYY');
        }
      }
    }
  }
}

window.customElements.define(PostsApp.is, PostsApp);

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
      },

      user: {
        type: Object,
      }
    }
  }
  
  ready() {
    super.ready();
    this.addEventListener('login-submit', function(event) {
      this.set('user', event.detail);
    })
  }
}

window.customElements.define(PostsApp.is, PostsApp);

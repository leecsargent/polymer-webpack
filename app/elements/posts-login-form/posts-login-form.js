class PostsLoginForm extends Polymer.GestureEventListeners(Polymer.Element) {
  static get is() { return 'posts-login-form'; }

  _submit(event) {
    var serialized = this.$.loginForm.serializeForm();
    this.dispatchEvent(
      new CustomEvent('login-submit', {
        detail: serialized,
        composed: true,
        bubbles: true
      })
    );
  }
}

window.customElements.define(PostsLoginForm.is, PostsLoginForm);

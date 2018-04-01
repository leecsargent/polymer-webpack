class PostsAppLocation extends Polymer.Element {
  static get is() { return 'posts-app-location'; }
  static get properties() {
    return {
      dirtyRoute: {
        type: Object,
        observer: '_dirtyRouteUpdated',
      },

      route: {
        type: Object,
        notify: true,
      },
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('set-route', this._onSetRoute.bind(this));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('set-route', this._onSetRoute.bind(this));
  }

  _dirtyRouteUpdated(dirtyRoute) {
    var cleanRoute = Object.assign({}, this.route, dirtyRoute, {
      path: this._removeTrailingSlash(dirtyRoute.path),
    });
    var parts = cleanRoute.path.split('/').filter(function(value) {
      return value;
    });

    this.set('route', cleanRoute);

    //  api.navigation.setRoute({route: parts});
  }

  _onSetRoute(event) {
    this.set('dirtyRoute', Object.assign({}, this.dirtyRoute, event.detail));
  }

  _removeTrailingSlash(path) {
    if (path !== '/' && path.slice(-1) === '/') {
      return path.slice(0, -1);
    }

    return path;
  }
}

window.customElements.define(PostsAppLocation.is, PostsAppLocation);

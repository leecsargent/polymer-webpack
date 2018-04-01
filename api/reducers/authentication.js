const authentication = (state ={isAuthenticated: false, isFetching: false}, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });

    case 'LOGIN_USER_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        isAuthenticated: true,
        token: action.payload.token,
      });

    default:
      return state
  }
}

export default authentication;

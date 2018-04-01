const initialState = {
  isAuthenticated: false,
  isFetching: false,
  status: 'BUSY',
};

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_INITIAL_UNAUTHORIZED':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        isAuthenticated: false,
        status: 'READY',
      });

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
        status: 'READY',
      });

    default:
      return state
  }
}

export default authentication;

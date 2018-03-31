const posts = (state = { isFetching: false, didInvalidate: false, items: []}, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });

    case 'FETCH_POSTS_SUCCESS':
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });

    default:
      return state
  }
}

export default posts;

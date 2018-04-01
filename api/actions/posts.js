export const fetchPosts = () => {
  return dispatch => {
    dispatch(requestPosts());
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => dispatch(postsLoaded(data)))
      .catch(error => dispatch(handleError(error)))
    }
};

export const requestPosts = () => {
  return {
    type: 'FETCH_POSTS_REQUEST',
  };
}

export const postsLoaded = (posts) => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    posts
  };
}

export const handleError = (error) => {
  return {
    type: 'FETCH_POSTS_ERROR',
    error,
  };
}

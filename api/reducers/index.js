import { combineReducers } from 'redux'

import postsReducer from './posts';
import authenticationReducer from './authentication';

export default combineReducers({
  posts: postsReducer,
  authentication: authenticationReducer,
});

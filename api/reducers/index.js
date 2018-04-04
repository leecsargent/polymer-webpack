import { combineReducers } from 'redux'

import postsReducer from './posts';
import authenticationReducer from './authentication';
import navigationReducer from './navigation';

export default combineReducers({
  posts: postsReducer,
  authentication: authenticationReducer,
  navigation: navigationReducer,
});

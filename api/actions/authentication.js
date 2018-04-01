import genSalt from '../utils/salt'
import bcrypt from 'bcryptjs';

let salt;

export const login = (username, password) => {

  return (dispatch) => {
    // Show the loading indicator, hide the last error
    dispatch(loginUserRequest());

    salt = genSalt(username);
    // Encrypt password
    bcrypt.hash(password, salt, (err, hash) => {
      // Something wrong while hashing
      if (err) {
        dispatch(setErrorMessage(errorMessages.GENERAL_ERROR));
        return;
      }

      const user = {user: {email: username, password: hash}};
      return fetch('http://localhost:4000/users/login', {
        'method': 'POST',
        'headers' : {
          'Content-Type': 'application/json',
        },
        'body': JSON.stringify(user),
      })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        if (data.error && data.error.status === 422) {
          return dispatch(loginUserFailure(data.error));
        }
        return dispatch(loginUserSuccess(data.auth_token));
      })
      .catch(function(error) {
        console.log(error);
      })
    });
  }
};


export function loginUserRequest() {
  return {
    type: 'LOGIN_USER_REQUEST'
  }
}

export function loginUserSuccess(token) {
  localStorage.setItem('token', token);
  return {
    type: 'LOGIN_USER_SUCCESS',
    payload: {
      token: token
    }
  }
}

export function verifyToken(token) {
  return (dispatch) => {
    dispatch(loginUserRequest());
    return fetch('http://localhost:4000/users/validate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      }
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      return dispatch(loginUserSuccess(data.auth_token));
    })
    .catch(function(error) {
      // TODO fix the error in rails
      console.log('error', error);
    })
  }
}

function _setInititialUnauthorized() {
  return {
    type: 'SET_INITIAL_UNAUTHORIZED'
  }
}

export function setInititialUnauthorized() {
  return dispatch => dispatch(_setInititialUnauthorized());
}

import {ACTION_TYPES, STATUSES} from '../constants';

const initialState = {
  history: [],
  route: [],
  modal: {},
  error: null,
  status: 'EMPTY',
};

const navigationReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_ROUTE':
      return Object.assign({},
        state,
        action.payload,
        {
          history: state.history.concat([state.route]),
          error: null,
          status: STATUSES.READY,
        });
    default:
      return state;
  }
}

export default navigationReducer;

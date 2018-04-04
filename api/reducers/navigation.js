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
// export default function navigationReducer(state, action) {
//   if (typeof state === 'undefined') {
//     state = initialState;
//   }
//
//   switch (action.type) {
//   case ACTION_TYPES.SET_ROUTE:
//     return Object.assign({},
//       state,
//       action.payload,
//       {
//         history: state.history.concat([state.route]),
//         error: null,
//         status: STATUSES.READY,
//       });
//   case ACTION_TYPES.SET_MODAL_CLOSED:
//     return Object.assign({},
//       state,
//       {modal: {isOpen: false}});
//   case ACTION_TYPES.SET_MODAL_OPEN:
//     return Object.assign({},
//       state,
//       {modal: {isOpen: true}});
//   }
//
//   return state;
// }

import constants from '../constants';

export function setRoute(routeData) {
  return {
    type: constants.ACTION_TYPES.SET_ROUTE,
    payload: routeData,
  };
}

export function setModalClosed() {
  return {
    type: constants.ACTION_TYPES.SET_MODAL_CLOSED,
  };
}

export function setModalOpen() {
  return {
    type: constants.ACTION_TYPES.SET_MODAL_OPEN,
  };
}

export default {
  setRoute: setRoute,
  setModalClosed: setModalClosed,
  setModalOpen: setModalOpen,
};

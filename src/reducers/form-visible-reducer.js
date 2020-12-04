import * as c from './../actions/ActionTypes';

export default (state = false, action) => {
  // console.log(state)
  switch (action.type) {
    case c.TOGGLE_FORM:
      return !state;
    case 'SET_FORM_FALSE':
      return false;
    default:
      return state;
    }
};
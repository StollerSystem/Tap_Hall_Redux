import * as c from './../actions/ActionTypes';

export default (state = false, action) => {  
  switch (action.type) {
    case c.TOGGLE_FORM:
      return !state;
    case c.SET_FORM_FALSE:
      return false;
    default:
      return state;
  }
};
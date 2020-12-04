import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  switch (action.type) {
  case c.SELECTED_KEG:
    const newSelectedKeg = state.filter(keg => keg.id === action.id)[0];
    return newSelectedKeg
  default:
    return state;
  }    
}
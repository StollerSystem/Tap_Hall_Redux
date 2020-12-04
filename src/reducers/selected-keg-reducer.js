import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  // console.log(state)
  switch (action.type) {
  case c.SELECTED_KEG:
    const newSelectedKeg = action.tapList.filter(keg => keg.id === action.id)[0];
    return newSelectedKeg
  case 'SET_KEG_NULL':    
    state = null;
    return state;
  default:
    return state;
  }    
}
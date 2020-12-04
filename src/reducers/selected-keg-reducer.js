export default (state = null, action) => {
  switch (action.type) {
  case 'SELECT_KEG':
    const newSelectedKeg = state.filter(keg => keg.id === action.id)[0];
    return newSelectedKeg
  default:
    return state;
  }    
}
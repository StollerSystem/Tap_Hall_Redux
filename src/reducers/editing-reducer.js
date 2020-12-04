export default (state = false, action) => {
  switch (action.type) {
  case 'EDITING':
    return !state;
  default:
    return state;
  }
};
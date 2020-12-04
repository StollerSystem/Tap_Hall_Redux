import editingReducer from './editing-reducer';
import formVisibleReducer from './form-visible-reducer';
import selectedKegReducer from './selected-keg-reducer';
import tapListReducer from './tap-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  masterTapList: tapListReducer,
  forVisibleOnPage: formVisibleReducer,
  selectedKeg: selectedKegReducer,
  editing: editingReducer
})

export default rootReducer;
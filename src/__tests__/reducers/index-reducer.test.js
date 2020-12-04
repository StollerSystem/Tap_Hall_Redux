import rootReducer from '../../reducers/index';
import editingReducer from '../../reducers/editing-reducer';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import tapListReducer from '../../reducers/tap-list-reducer';
import { createStore } from 'redux';

describe("rootReducer", () => {

  let store = createStore(rootReducer);

  test('1 Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTapList: [],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    });
  });

  test('2 Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('3 Check that initial state of editingReducer matches root reducer', () => {
    expect(store.getState().editing).toEqual(editingReducer(undefined, { type: null }));
  });


});
import selectedKeg from '../../reducers/selected-keg-reducer';
import * as c from '../../actions/ActionTypes';

describe("selectedKegReducer", () => {

  const startingList = [{
    name: "testBeer",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "1",
    id: "10001"
  },{
    name: "testBeer",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "1",
    id: "10002"
  }];

  

  test('Should return default state if no action type is recognized', () => {
    expect(selectedKeg(undefined, { type: null })).toEqual(null);
  });

  test('Should select keg by id', () => {

    const action = {
      type: c.SELECTED_KEG,
      id: "10001",
      tapList: startingList
    }

    expect(selectedKeg(undefined, action)).toEqual({
      name: "testBeer",
      brand: "testBrand",
      price: "4.00",
      alcoholContent: "6.5",
      quantity: "1",
      id: "10001"
    });
  });  

  test('Should set keg state to null', () => {
    expect(selectedKeg(undefined, { type: c.SET_KEG_NULL })).toEqual(null);
  });
});
import selectedKeg from '../../reducers/selected-keg-reducer';

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
      type: 'SELECT_KEG',
      id: "10001"
    }

    expect(selectedKeg(startingList, action)).toEqual({
      name: "testBeer",
      brand: "testBrand",
      price: "4.00",
      alcoholContent: "6.5",
      quantity: "1",
      id: "10001"
    });
  });  
});
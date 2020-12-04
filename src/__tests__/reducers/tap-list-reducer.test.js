import tapListReducer from '../../reducers/tap-list-reducer';


describe('tap-list-reducer', () => {

  const newKeg = {
    name: "testBeer",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "10",
    id: "10001"
  }  

  const startingList = [];

  test('1 Should return default state if no action is triggered', () => {    
    expect(tapListReducer(undefined, {type: null})).toEqual([])
  })

  test('Should concat new keg to tap list', () => {
    const { name, brand, price, alcoholContent, quantity, id } = newKeg;
    const action = {
      type: 'ADD_KEG',
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      quantity: quantity,
      id: id  
    }

    expect(tapListReducer(startingList, action)).toEqual([{
      name: "testBeer",
      brand: "testBrand",
      price: "4.00",
      alcoholContent: "6.5",
      quantity: "10",
      id: "10001"
    }])
  });
});
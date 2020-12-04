import tapListReducer from '../../reducers/tap-list-reducer';
import * as c from '../../actions/ActionTypes';


describe('tap-list-reducer', () => {

  const newKeg = {
    name: "testBeer",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "10",
    id: "10001"
  }  

  const editKeg = {
    name: "testEdit",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "10",
    id: "10001"
  }

  const startingList = [];
  const startingList2 = [{
    name: "testBeer",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "1",
    id: "10001"
  }];

  test('1 Should return default state if no action is triggered', () => {    
    expect(tapListReducer(undefined, {type: null})).toEqual([])
  })

  test('2 Should concat new keg to tap list', () => {
    const { name, brand, price, alcoholContent, quantity, id } = newKeg;
    const action = {
      type: c.ADD_KEG,
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

  test('3 Should delete a keg', () => {    
    const action = {
      type: c.DELETE_KEG,
      id: "10001"
    }
    expect(tapListReducer(startingList2, action)).toEqual([])    
  })

  test('4 Should pour a pint', () => {
    const action = {
      type: c.POUR_PINT,
      id: "10001"
    }
    expect(tapListReducer(startingList2, action)).toEqual([{
      name: "testBeer",
      brand: "testBrand",
      price: "4.00",
      alcoholContent: "6.5",
      quantity: "0",
      id: "10001"
    }])
  })

  test('5 Should edit a keg', () => {    
    const action = {
      type: c.EDIT_KEG,
      keg: editKeg,
      selectedKeg: newKeg
    }
    expect(tapListReducer(startingList2, action)).toEqual([editKeg])    
  })
});
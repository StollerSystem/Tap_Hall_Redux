import * as actions from './../../actions';
// import * as c from '../../actions/ActionTypes';

describe('tap room actions', () => {

  const newKeg = {
    name: "testBeer",
    brand: "testBrand",
    price: "4.00",
    alcoholContent: "6.5",
    quantity: "10",
    id: "10001"
  }  

  test('1 add keg should create ADD_KEG action', () => {    
    expect(actions.addKeg(newKeg)).toEqual({
      type: 'ADD_KEG',
      name: "testBeer",
      brand: "testBrand",
      price: "4.00",
      alcoholContent: "6.5",
      quantity: "10",
      id: "10001"
    }  );
  });

  test('2 delete keg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg("10001")).toEqual({
      type: 'DELETE_KEG',
      id: "10001"
    })
  })

});

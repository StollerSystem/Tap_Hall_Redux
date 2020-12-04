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

  test('3 pour pint should create POUR_PINT action', () => {
    expect(actions.pourPint("10001")).toEqual({
      type: 'POUR_PINT',
      id: "10001"
    })
  })

  test('4 toggle form should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: 'TOGGLE_FORM'      
    })
  })

  test('5 selected keg should create SELECTED_KEG action', () => {
    expect(actions.selectedKeg("10001")).toEqual({
      type: 'SELECTED_KEG',
      id: "10001"      
    })
  })

});

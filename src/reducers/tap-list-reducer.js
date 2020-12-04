export default (state = [], action) => { 
  
  switch (action.type) {

  case 'ADD_KEG':
    const { name, brand, price, alcoholContent, quantity, id } = action;
    return state.concat({      
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      quantity: quantity,
      id: id  
    }) 
  
  case 'DELETE_KEG':
    const newState = state.filter(Tap => Tap.id !== action.id);    
    return newState;

  default:
    return state;
  }
}
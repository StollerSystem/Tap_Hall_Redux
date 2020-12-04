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
  default:
    return state;
  }
}
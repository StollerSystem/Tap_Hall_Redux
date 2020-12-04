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

  case 'POUR_PINT':
    const newState2 = state;
    for (const keg of newState2) {
      console.log("POUR TEST "+" "+keg.id+" "+action.id)
      if (keg.id === action.id) {
        if (keg.quantity > 0) {
          keg.quantity -= 1;
          keg.quantity = keg.quantity.toString();
        } else if (keg.quantity <= 0) {
          alert("YYYAARRRGGG! Thy Keg is Empty!")
        }
        break;
      }
    }
    return newState2

  default:
    return state;
  }
}
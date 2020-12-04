export const addKeg = (newKeg) => {
  const { name, brand, price, alcoholContent, quantity, id } = newKeg;
  return {    
    type: 'ADD_KEG',
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    quantity: quantity,
    id: id  
  }
}
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
  };
};

export const deleteKeg = (id) => {
  return {
    type: 'DELETE_KEG',
    id: id
  };
};

export const pourPint = (id) => {
  return {
    type: 'POUR_PINT',
    id: id
  };
};

export const toggleForm = () => {
  return {
    type: 'TOGGLE_FORM'
  };
};

export const selectedKeg = (id) => {
  return {
    type: 'SELECTED_KEG',
    id: id
  };
};
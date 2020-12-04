import * as c from './ActionTypes';

export const addKeg = (newKeg) => {
  const { name, brand, price, alcoholContent, quantity, id } = newKeg;
  return {    
    type: c.ADD_KEG,
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
    type: c.DELETE_KEG,
    id: id
  };
};

export const pourPint = (id) => {
  return {
    type: c.POUR_PINT,
    id: id
  };
};

export const toggleForm = () => {
  return {
    type: c.TOGGLE_FORM
  };
};

export const setFormFalse = () => {
  return {
    type: c.SET_FORM_FALSE
  };
};

export const selectedKeg = (id,tapList) => {
  return {
    type: c.SELECTED_KEG,
    id: id,
    tapList: tapList
  };
};

export const editing = () => {
  return {
    type: c.EDITING
  }
}
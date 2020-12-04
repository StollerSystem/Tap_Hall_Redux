import React from 'react';
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";


function NewProductForm(props) {

  function handleNewProductFormSubmission(event){
    event.preventDefault();    
    const price = parseInt(event.target.price.value).toFixed(2);
    props.onNewKegCreation({name: event.target.name.value, brand: event.target.brand.value, price: price, alcoholContent: event.target.alcoholContent.value, quantity: event.target.quantity.value, id: v4() })  }  
  
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewProductFormSubmission}
      buttonText="Add Keg"/>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func,
  onNewKegCreation: PropTypes.func
};

export default NewProductForm;
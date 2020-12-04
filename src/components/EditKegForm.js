import React from "react";
import PropTypes from "prop-types";
import { v4 } from "uuid";

function EditKegForm(props) {

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      alcoholContent: event.target.alcoholContent.value,
      quantity: event.target.quantity.value,
      id: v4()
    })
  }
  
  return (
    <React.Fragment>
        <form onSubmit={handleEditKegFormSubmission}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
            className="form-control"
              type='text'
              name='name'
              defaultValue={props.keg.name} required /><br/>
            <label htmlFor="brand">Brand:</label>
            <input
            className="form-control"
              type='text'
              name='brand'
              defaultValue={props.keg.brand} required /><br/>
            <label htmlFor="price">Price:</label>
            <input
            className="form-control"
              type="number"
              name='price'
              defaultValue={props.keg.price} min="0.01" step="0.01" required /><br/>
            <label htmlFor="alcoholContent">Alcohol Content:</label>
            <input
            className="form-control"
              type="number"
              name='alcoholContent'
              defaultValue={props.keg.alcoholContent} min="0.01" step="0.01" required/><br/>
            <label htmlFor="quantity">Quantity:</label>
            <input
            className="form-control"
              type="number"
              name='quantity'
              defaultValue={props.keg.quantity} min="1" step="1" max="124" required/><br/>
          <button className="btn btn-outline-danger btn-block" type='submit'>Update Keg</button>
        </div>
      </form>
    </React.Fragment>
  );
}

EditKegForm.propTypes = {
  onEditProduct: PropTypes.func,
  keg: PropTypes.object
};

export default EditKegForm;
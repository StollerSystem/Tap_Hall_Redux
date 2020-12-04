import React from 'react';
import PropTypes from "prop-types";

function NewProductForm(props) {
  
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <div className="form-group">
          <input
          className="form-control"
            type='text'
            name='name'
            placeholder='Name' required /><br/>
          <input
          className="form-control"
            type='text'
            name='brand'
            placeholder='Brand' required /><br/>
          <input
          className="form-control"
            type="number"
            name='price'
            placeholder='Price' min="0.01" step="0.01" required /><br/>
          <input
          className="form-control"
            type="number"
            name='alcoholContent'
            placeholder='Alcohol Content' min="0.01" max="15.00" step="0.01" required/><br/>
          <input
          className="form-control"
            type="number"
            name='quantity'
            placeholder='Quantity (full keg = 124)' min="1" step="1" max="124" required/><br/>
          <button className="btn btn-outline-danger btn-block" type='submit'>{props.buttonText}</button>
        </div>
      </form>
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default NewProductForm;
import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewMerchForm(props){
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      name: event.target.names.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewMerchFormSubmission}>
        <input
          type="text"
          name="name"
          placeholder="Name" />
        <textarea
          name="description"
          placeholder="Description" />
        <input
          type="number"
          name="quantity" />
      <button type="submit">Create</button>
      </form>
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  OnNewMerchCreation: PropTypes.func
};

export default NewMerchForm;
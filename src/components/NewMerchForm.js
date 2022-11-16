import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewMerchForm(props){
  function handleNewMerchFormSubmission(event) {
    event.preventDefault();
    props.onNewMerchCreation({
      name: event.target.name.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewMerchFormSubmission}
      buttonText="Create Merch" />
    </React.Fragment>
  );
}

NewMerchForm.propTypes = {
  OnNewMerchCreation: PropTypes.func
};

export default NewMerchForm;
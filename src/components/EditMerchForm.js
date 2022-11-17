import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from 'prop-types';

function EditMerchForm(props) {
  const { merch } = props;

  function handleEditingMerchFormSubmission(event){
    event.preventDefault();
    props.onEditMerch({
      name: event.target.name.value, 
      description: event.target.description.value, 
      quantity: parseInt(event.target.quantity.value),
      id:merch.id});
  }

  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleEditingMerchFormSubmission}
      buttonText="Update Item" />
    </React.Fragment>
  )
}

EditMerchForm.propTypes = {
  merch: PropTypes.object,
  onEditMerch: PropTypes.func
}

export default EditMerchForm;
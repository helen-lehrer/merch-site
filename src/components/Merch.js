import React from "react";
import PropTypes from "prop-types";

function Merch(props){
  return (
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p><em>{props.quantity}</em></p>
    </React.Fragment>
  )
}

Merch.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  quantity: PropTypes.number.isRequired,
}

export default Merch;
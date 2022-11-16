import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
  const { merch, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h1>Merch Detail</h1>
      <h3>{merch.name} - <em>{merch.quantity}</em></h3>
      <p>{merch.description}</p>
      <button onClick={()=> onClickingDelete(merch.id)}>Delete Merch Item</button>
      <hr/>
    </React.Fragment>
  );
}

MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func
};

export default MerchDetail;
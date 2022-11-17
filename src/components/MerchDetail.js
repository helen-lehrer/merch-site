import React from "react";
import PropTypes from "prop-types";

function MerchDetail(props){
  const { merch, onClickingDelete, onClickingBuy } = props;
  console.log(props)


  if(merch.quantity === 0){
    return (
      <React.Fragment>
      <h2>Merch Detail</h2>
      <h3>{merch.name} - <em>{merch.quantity}</em></h3>
      <p>{merch.description}</p>
      <p>This Item has been sold out!</p>
      <button onClick={ props.onClickingEdit }>Update Merch</button>
      </React.Fragment>
    )
  }

  return (
    <React.Fragment>
      <h2>Merch Detail</h2>
      <h3>{merch.name} - <em>{merch.quantity}</em></h3>
      <p>{merch.description}</p>
      <button onClick={ () => onClickingBuy(merch) }>Buy</button>
      <button onClick={ props.onClickingEdit }>Update Merch</button>
      <button onClick={()=> onClickingDelete(merch.id)}>Delete Merch Item</button>
      <hr/>
    </React.Fragment>
  );
}



MerchDetail.propTypes = {
  merch: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
};

export default MerchDetail;
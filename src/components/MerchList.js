import React from "react";
import Merch from "./Merch";
import PropTypes from "prop-types";

function MerchList(props){
return (
  <React.Fragment>
    {props.merchList.map((merch, index) =>
    <Merch name ={merch.name}
    description ={merch.description}
    quantity ={merch.quantity} 
    key={index} />
    )}
  </React.Fragment>
  );
}

MerchList.propTypes = {
  merchList: PropTypes.array
};

export default MerchList;
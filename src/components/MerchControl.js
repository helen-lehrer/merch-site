import React from "react";
import NewMerchForm from '/NewMerchForm';
import MerchList from './MerchList';

class MerchControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibileOnPage: false,
      mainMerchList: []
    };
  }

  handleAddingNewMerchToList = (newMerch) => {
    const newMainMerchList = this.state.mainMerchList.concat(newMerch);
    this.setState({mainMerchList: newMainMerchList, formVisibileOnPage: false })
  }

  handleClick = () => {
    this.setState(prevState =>({formVisibileOnPage: !prevState.formVisibileOnPage}))
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.formVisibileOnPage) {
      currentlyVisibleState = <NewMerchForm onNewMerchCreation={this.handleAddingNewMerchToList}/>
      buttonText = "Return to Merch List";
    } else {
      currentlyVisibleState = <MerchList merchlist={this.state.mainMerchList} />
      buttonText = "Add Merch Item";
    }
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
    );
  }
}
export default MerchControl;
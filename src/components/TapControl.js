import React from 'react';
import TapList from "./TapList.js"
import NewKegForm from "./NewKegForm.js"
import KegDetail from "./KegDetails.js"
import EditKegForm from "./EditKegForm.js"
import { connect } from 'react-redux';


class TapControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterTapList: [{name: "Viking Mead", brand: "Skull Crusher", price: "4.50", alcoholContent: "8.5", quantity: "10", id:"10001" }, {name: "Dansk Blod", brand: "Einstök", price: "5.50", alcoholContent: "6.5", quantity: "0", id:"10002" }, {name: "Savage Pilsner", brand: "Ragnar", price: "3.50", alcoholContent: "3.5", quantity: "124", id:"10003" }],
      formVisibleOnPage: false,
      selectedKeg: null,
      editing: false
    }
  }

  handleClickForm = () => {
    if (this.state.selectedKeg != null){
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterTapList = this.state.masterTapList.concat(newKeg);
    this.setState({
      masterTapList: newMasterTapList,
      formVisibleOnPage: false });
  }

  handleChangingSelectedKeg = (id) => {       
    const newSelectedKeg = this.state.masterTapList.filter(keg => keg.id === id)[0];  
    this.setState({selectedKeg: newSelectedKeg});
  }

  handlePourPint = (id) => {
    const newMasterTapList = this.state.masterTapList;
    for (const keg of newMasterTapList) {
      if (keg.id === id) {
        if (keg.quantity > 0) {
          keg.quantity -= 1;
          keg.quantity = keg.quantity.toString();
        } else if (keg.quantity <= 0) {
          alert("YYYAARRRGGG! Thy Keg is Empty!")
        }
        break;
      }
    }
    this.setState({
      masterTapList: newMasterTapList,
      formVisibleOnPage: false });
  }

  handleEditClick = () => {    
    this.setState({editing: true});
  }

  handleEditingKegInList = (kegToEdit) => {    
    const editedMasterTapList = this.state.masterTapList.filter(Keg => Keg.id !== this.state.selectedKeg.id).concat(kegToEdit);    
  this.setState({
      masterTapList: editedMasterTapList,
      editing: false,
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterTapList = this.state.masterTapList.filter(Tap => Tap.id !== id);
    this.setState({
      masterTapList: newMasterTapList,
      selectedKeg: null
    });
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;    
    if (this.state.editing){
      currentVisibleState = <EditKegForm keg = {this.state.selectedKeg} onEditProduct = {this.handleEditingKegInList}/>
      buttonText = "Return to Tap List";
    } else if (this.state.selectedKeg != null) {
        currentVisibleState = <KegDetail 
        keg = {this.state.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}/>
        buttonText = "Return to Tap List";
    } else if (this.state.formVisibleOnPage) {
        currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
        buttonText = "Return to Tap List"
    } else {     
        currentVisibleState = <TapList 
        availableKegs={this.state.masterTapList}
        onKegSelection={this.handleChangingSelectedKeg}
        onPourPint={this.handlePourPint}/>      
        buttonText = "Add New Keg"
      }

    return (      
      <div className="container mainBox">
        {currentVisibleState}
        <br/>
        <button className="arrow btn btn-outline-info btn-block" onClick={this.handleClickForm}>{buttonText}</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterTapList: state.masterTapList,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedKeg: state.selectedKeg,
    editing: state.editing
  }
}

TapControl = connect(mapStateToProps)(TapControl);

export default TapControl;

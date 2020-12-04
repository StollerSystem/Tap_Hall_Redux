import React from 'react';
import TapList from "./TapList.js"
import NewKegForm from "./NewKegForm.js"
import KegDetail from "./KegDetails.js"
import EditKegForm from "./EditKegForm.js"
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions/index'






class TapControl extends React.Component {
  constructor(props) {
    super(props);
    // this.props = {
    //   masterTapList: [{name: "Viking Mead", brand: "Skull Crusher", price: "4.50", alcoholContent: "8.5", quantity: "10", id:"10001" }, {name: "Dansk Blod", brand: "Einstök", price: "5.50", alcoholContent: "6.5", quantity: "0", id:"10002" }, {name: "Savage Pilsner", brand: "Ragnar", price: "3.50", alcoholContent: "3.5", quantity: "124", id:"10003" }]}
  }

  handleClickForm = () => {
    const { dispatch } = this.props;    
    if (this.props.selectedKeg != null){
      dispatch(a.setFormFalse())
      dispatch(a.setKegNull())
      dispatch(a.editingSetFalse())      
    } else {      
      dispatch(a.toggleForm())      
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    dispatch(a.addKeg(newKeg))
    dispatch(a.toggleForm())    
  }

  handleChangingSelectedKeg = (id) => {  
    const { dispatch } = this.props;
    dispatch(a.selectedKeg(id,this.props.masterTapList))     
  }  

  
  handlePourPint = (id) => {
    const { dispatch } = this.props;
    dispatch(a.pourPint(id));
    this.forceUpdate();        
  }

  handleEditClick = () => {   
    const { dispatch } = this.props;
    dispatch(a.editing())     
  }

  handleEditingKegInList = (kegToEdit) => {    
    const { dispatch } = this.props;
    dispatch(a.editKeg(kegToEdit,this.props.selectedKeg))
    dispatch(a.setKegNull())
    dispatch(a.editingSetFalse())  
  }

  handleDeletingKeg = (id) => {
    const { dispatch } = this.props;
    dispatch(a.deleteKeg(id))
    dispatch(a.setKegNull())    
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;    
    if (this.props.editing){
      currentVisibleState = <EditKegForm keg = {this.props.selectedKeg} onEditProduct = {this.handleEditingKegInList}/>
      buttonText = "Return to Tap List";
    } else if (this.props.selectedKeg != null) {
        currentVisibleState = <KegDetail 
        keg = {this.props.selectedKeg} 
        onClickingDelete = {this.handleDeletingKeg}
        onClickingEdit = {this.handleEditClick}/>
        buttonText = "Return to Tap List";
    } else if (this.props.formVisibleOnPage) {
        currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />;
        buttonText = "Return to Tap List"
    } else {     
        currentVisibleState = <TapList 
        availableKegs={this.props.masterTapList}
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

TapControl.propTypes = {
  masterTapList: PropTypes.array,
  formVisibleOnPage: PropTypes.bool,
  selectedKeg: PropTypes.object,
  editing: PropTypes.bool
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

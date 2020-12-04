import React from "react";
import Keg from "./Keg.js"
import PropTypes from "prop-types";



function TapList(props) {
  return (
    <React.Fragment>
      <h2 className="tapList">- Tap List -</h2>
      <hr/>      
      {props.availableKegs.map((keg) =>
        <Keg
        name={keg.name}
        brand={keg.brand}
        price={keg.price}
        alcoholContent={keg.alcoholContent}
        quantity={keg.quantity}
        id={keg.id}
        key={keg.id}
        onKegSelection={props.onKegSelection}
        onPourPint={props.onPourPint}/>
      )}
    </React.Fragment>
  )
}

TapList.propTypes = {
  availableKegs: PropTypes.array,
  onKegSelection: PropTypes.func,
  onPoutPint: PropTypes.func  
};

export default TapList;
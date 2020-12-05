import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";


function App(){
  return ( 
    <React.Fragment>
      <div className="container">
        <div className="row flex-nowrap">
          <div className="col-2">
            <img className="sideImg" src={require('./img/VikingMammen2.png')} alt="MammenLeft" />            
          </div>
          <div className="col-lg-8">
            <Header />
            <TapControl />          
          </div>
          <div className="col-2">
          <img className="sideImg" src={require('./img/VikingMammen1.png')} alt="MammenRight" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

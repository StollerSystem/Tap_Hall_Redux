import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";


function App(){
  return ( 
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img className="shield" src={require('./viking_PNG84.png')} alt="ship" />
            <img className="shield" src={require('./viking_PNG84.png')} alt="ship" />
            <img className="shield" src={require('./viking_PNG84.png')} alt="ship" />
            <img className="shield" src={require('./viking_PNG84.png')} alt="ship" />
            <img className="shield" src={require('./viking_PNG84.png')} alt="ship" />
            
          </div>
          <div className="col-8">
            <Header />
            <TapControl />          
          </div>
          <div className="col-2">
            
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

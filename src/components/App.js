import React from "react";
import Header from "./Header";
import TapControl from "./TapControl";


function App(){
  return ( 
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-2">
            <img className="shield" src={require('./VikingMammen2.png')} alt="ship" />
           
            
          </div>
          <div className="col-8">
            <Header />
            <TapControl />          
          </div>
          <div className="col-2">
          <img className="shield" src={require('./VikingMammen1.png')} alt="ship" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

import React from "react";

function Header() {
  return (    
    <React.Fragment>
      <br/><br/>
      <div className="container header hero-image">
        {/* <img src={ship}/> */}
        <img src={require('./img/ClipartKey_1391822B.png')} alt="ship" />
        <h1>VIKING SHIP TAP HALL</h1>
        <p>(Wimps and Posers: leave the hall)</p>
      </div>
    </React.Fragment>
  );
}

export default Header;
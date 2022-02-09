import React from "react";
import Login from "./Login"

var userisregistered =false;


function Sign() {
  return (
    <div className="container">
     <Login isregistered={userisregistered} />
    </div>
    
  );
}

export default Sign;
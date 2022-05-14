import React from"react";
import ReactDOM from "react-dom";
const Son4 = ({message,children}) => {
    return (
      <div>
        <h1>this is from son 4</h1>
        <p>{message}</p>
        <p>{children}</p>
      </div>
    );
  };
  
  export default Son4;
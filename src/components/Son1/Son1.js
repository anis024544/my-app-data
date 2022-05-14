import React from "react";
import ReactDOM from "react-dom";
import Natti from "../Natti/Natti";
const Son1 = ({ Hablu, headline1, person, children,message }) => {
  return (
    <div>
      <h1>this is from son 1</h1>
      <h5>{headline1}</h5>
      <Natti message={message}/>
    </div>
  );
};

export default Son1;

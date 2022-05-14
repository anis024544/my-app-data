import React, { useContext } from "react";
import { MessageContext } from "../Parent/Parent";
const Natti = ({ message }) => {
  const [globalMessage, setGlobalMessage] = useContext(MessageContext);
  return (
    <div>
      <h1>this is from nati</h1>
      <p>{globalMessage}</p>
    </div>
  );
};

export default Natti;

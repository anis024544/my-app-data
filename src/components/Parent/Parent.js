import React, { createContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Son1 from "../Son1/Son1";
import Son2 from "../Son2/Son2";
import Son3 from "../Son3/Son3";
import Son4 from "../Son4/Son4";
export const MessageContext = createContext();
const Parent = () => {
  const [title, setTitle] = useState("this is from parent testing of state");
  // let title = "this is from parent testing ";
  // title=22;
  // useEffect(() => {
  //   setTitle(22);
  // });
  const [paragraph, setParagraph] = useState(
    "freedom for thinking from parents"
  );
  const [headline, setHeadline] = useState(
    "This is the way we brush our teeth"
  );
  const [Proverbs, setProverbs] = useState("Grapes are sour");
  const [message, setMessage] = useState("Hello ,nati");
  const person = { name: "riyad", age: "23", gender: "male" };
  const [headline1, setHeadline1] = useState(
    "The Tenuous Promise of the Substack Dream"
  );
  useEffect(() => {
    setProverbs("Black will take no other hue");
  });
  const [globalMessage, setGlobalMessage] = useState(  "hello from global sender" );

  return (
    <MessageContext.Provider value={[globalMessage, setGlobalMessage]}>
      <div>
        {/* <h1>{title}</h1> */}
        {/* <p>{paragraph}</p> */}
        <Son1  message={message} Hablu={paragraph} headline1={headline1} person={person}
        >
          {"i am comming as a child"}
        </Son1>
        {/* <Son2 headline={headline1} />
      <Son3 proverbs={Proverbs} /> */}
      <Son4>"it is sent from Son4"</Son4>
      </div>
    </MessageContext.Provider>
  );
};

export default Parent;

import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { getDate } from "../services/service";
const TypeWriter = () => {
    const age = getDate().year - 2004
  return <ReactTypingEffect text={[`{"age":"${age}" , "nickName":"TaKe"} `]} />;
};

export default TypeWriter;

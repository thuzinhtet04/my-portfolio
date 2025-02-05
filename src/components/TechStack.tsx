import React, { ReactNode } from "react";
import Marquee from "react-fast-marquee";
const TechStack = ({ children }: { children: ReactNode }) => {
  return <Marquee autoFill pauseOnHover className=" w-full h-full ">{children}</Marquee>;
};

export default TechStack;

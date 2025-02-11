// import useEmblaCarousel from "embla-carousel-react";
import React from "react";
import { motion, useDragControls } from "motion/react";

const TestC = () => {
  const controls = useDragControls();
  console.log(controls);
  
  return (
    <div className=" ">
      <motion.div
        drag="x"
        dragConstraints={{ left: 500, right: 500 }}
        className=" flex justify-between  w-[200%] lg:w-full"
      >
        <a className=" bg-blue-300 p-4" href="1">
          1
        </a>
        <a className=" bg-blue-300 p-4" href="2">
          2
        </a>
        <a className=" bg-blue-300 p-4" href="3">
          3
        </a>
        <a className=" bg-blue-300 p-4" href="4">
          4
        </a>
        <a className=" bg-blue-300 p-4" href="5">
          5
        </a>
        <a className=" bg-blue-300 p-4" href="6">
          6
        </a>
      </motion.div>
      <motion.div
        drag
        dragConstraints={{ left: 50, right: 50 }}
        className="w-10 h-10 bg-pink-400 absolute left-[50%] -translate-x-[50%]"
      >
        helo
      </motion.div>
    </div>
  );
};
export default TestC;

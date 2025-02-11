import React from "react";
import { easeInOut, motion } from "motion/react";
import p1 from "../assets/thinking.png";
import { Link } from "react-router";

const Portfolio = () => {
  return (
    <section className=" bg-gray-800 min-w-screen min-h-screen">
      <h4 className="text-slate-200 font-inter text-xl text-center">
        Portfolio
      </h4>
      <div className="grid grid-cols-12 max-w-[1200px] mx-auto ">
        <div className=" col-span-7">
          <h2 className=" text-slate-200 text-6xl flex gap-2">
            Hey I'm{" "}
            <div className="text-yellow-400 font-inter font-bold">
              Thu Zin Htet{" "}
              <motion.p
                style={{ originX: 1, originY: 1, display: "inline-block" }}
                animate={{ rotate: [10, 0, 10] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: 0.5,
                  ease: easeInOut,
                }}
              >
                👋
              </motion.p>
            </div>
          </h2>
          <p className="text-slate-400 font-bold mt-3">
            Building Interactive & Scalable Web Experiences
          </p>
          <div className="text-slate-400 font-roboto flex flex-col gap-3 mt-5">
            {" "}
            <p>
              Welcome to my digital space! I'm a Frontend Developer passionate
              about crafting high-performance, visually appealing, and
              user-friendly web applications. I specialize in modern web
              technologies like{" "}
              <strong className=" text-blue-400 ">React</strong>,{" "}
              <strong className=" text-blue-400 ">Tailwind CSS</strong>, and{" "}
              <strong className=" text-blue-400 ">Framer Motion</strong>,
              bringing designs to life with smooth animations and seamless
              interactivity.
            </p>
            <ul>
              <li> 🔹 Responsive & performance-optimized UIs</li>
              <li> 🔹 Interactive web experiences with modern frameworks</li>
              <li> 🔹 Clean, maintainable, and scalable code</li>
            </ul>
            <p className=" text-violet-500 ">
              💡 Let’s Build Something Amazing! Explore my projects, see my
              process, and let’s collaborate. 🚀
            </p>
            <div className="flex gap-3">
              <Link
                to="/projects"
                className="flex items-center gap-1 cursor-pointer"
              >
                {" "}
                <span className="text-2xl"> [</span>{" "}
                <span className=" text-blue-400 font-bold">
                  📂 View My Work
                </span>{" "}
                <span className="text-2xl">]</span>
              </Link>{" "}
              <Link
                to="/contact-me"
                className="flex items-center gap-1 cursor-pointer"
              >
                {" "}
                <span className="text-2xl"> [</span>{" "}
                <span className=" text-blue-400 font-bold">📩 Contact Me</span>{" "}
                <span className="text-2xl">]</span>
              </Link>
            </div>
          </div>
        </div>
        <div
          // style={{ borderRadius: "30% 58% 60% 39% /43% 35% 55% 57%  " }}

          className="col-span-4 col-start-9 relative flex items-center justify-center "
        >
          <img
            src={p1}
            style={{ borderRadius: "30% 58% 60% 39% /43% 35% 55% 57%  " }}
            className="bg-gradient-to-br blobAnimation absolute bottom-0 from-0% from-pink-700 to-90%  to-violet-700 ml-auto w-[100%] aspect-square   object-top mx-auto z-10 object-cover "
            alt=""
          />

          <div
            style={{ borderRadius: "30% 58% 60% 39% /43% 35% 55% 57%  " }}
            className=" flex overflow-ellipsis items-end to-violet-700 w-[90%] h-[300px]"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

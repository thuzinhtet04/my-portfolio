import React from "react";
import { easeInOut, motion } from "motion/react";
import p1 from "../assets/thinking.png";
import { Link } from "react-router";
import { Container } from "../components/Container";

const Portfolio = () => {
  return (
    <section className="bg-slate-800">
      <Container className="  min-h-screen flex flex-col gap-5 md:gap-10 lg:gap-20">
        <h4 className="text-slate-200 font-inter  text-xl text-center">
          Portfolio
        </h4>
        <div className=" inline-grid lg:grid-cols-12 grid-cols-4 md:grid-cols-8  mx-auto lg:flex-grow gap-y-5 md:gap-y-10  ">
          <div className=" md:col-start-3 lg:hidden md:col-span-4 col-span-full aspect-square overflow-hidden  sm:col-span-4  relative flex   items-center justify-center ">
            <img
              src={p1}
              style={{ borderRadius: "30% 58% 60% 39% /43% 35% 55% 57%  " }}
              className="bg-gradient-to-br blobAnimation absolute h-full  bottom-0 left-0 from-0% from-pink-700 to-90%  to-violet-700 ml-auto w-[100%] aspect-square   object-top mx-auto z-10 object-cover "
              alt=""
            />
          </div>
          <div className="col-span-4  md:col-span-6 md:col-start-2 lg:col-span-7 ">
            <h2 className=" text-slate-200 text-2xl md:text-4xl lg:text-5xl flex gap-2">
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
            <p className="text-slate-400 font-bold mt-0 sm:mt-2">
              Building Interactive & Scalable Web Experiences
            </p>
            <div className="text-slate-400 font-roboto flex flex-col gap-3 mt-2 sm:mt-5">
              {" "}
              <p>
                Welcome to my digital space! I'm a Frontend Developer passionate
                about crafting high-performance, visually appealing, and
                user-friendly web applications. I specialize in modern web
                technologies like{" "}
                <strong className=" text-blue-400  ">React</strong>,{" "}
                <strong className=" text-blue-400 ">Tailwind CSS</strong>, and{" "}
                <strong className=" text-blue-400 ">Framer Motion</strong>,
                bringing designs to life with smooth animations and seamless
                interactivity.
              </p>
              <ul>
                <li className="line-clamp-2 text-sm">
                  {" "}
                  🔹 Responsive & performance-optimized UIs
                </li>
                <li className="line-clamp-2 text-sm">
                  {" "}
                  🔹 Interactive web experiences with modern frameworks
                </li>
                <li className="line-clamp-2 text-sm">
                  {" "}
                  🔹 Clean, maintainable, and scalable code
                </li>
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
                  <span className=" text-blue-400 font-bold">
                    📩 Contact Me
                  </span>{" "}
                  <span className="text-2xl">]</span>
                </Link>
              </div>
            </div>
          </div>
          <div className=" lg:col-span-4 lg:col-start-9 aspect-square overflow-hidden   relative hidden lg:flex   items-center justify-center ">
            <img
              src={p1}
              style={{ borderRadius: "30% 58% 60% 39% /43% 35% 55% 57%  " }}
              className="bg-gradient-to-br blobAnimation absolute h-full  bottom-0 left-0 from-0% from-pink-700 to-90%  to-violet-700 ml-auto w-[100%] aspect-square   object-top mx-auto z-10 object-cover "
              alt=""
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Portfolio;

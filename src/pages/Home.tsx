import { LuChartNoAxesCombined } from "react-icons/lu";
import {
  SiMysql,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { FaJs, FaHtml5, FaLaravel } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import Clock from "../components/Clock";
import Date from "../components/Date";
import { Link } from "react-router";
import AudioPlayer from "../components/AudioPlayer";
import fb from "../assets/facebook.png";
import li from "../assets/linkedin.png";
import gh from "../assets/github.png";
import mockup from "../assets/mockup.jfif";
import tg from "../assets/telegram.png";
import { getDate } from "../services/service";
import TypeWriter from "../components/TypeWriter";
import cv from "../assets/cv.png";
import Profile from "../components/Profile";
import TechStack from "../components/TechStack";
import w1 from "../assets/wallpaper1.jpg";
import w2 from "../assets/wallpaper2.jpg";
import w3 from "../assets/wallpaper3.jpg";
import w4 from "../assets/wallpaper4.png";
import { useState } from "react";

const Home = () => {
  const [wIndex, setWIndex] = useState<number>(0);
  const wallpaper = [w1, w2, w3, w4];
  return (
    <section
      style={{ backgroundImage: `url(${w1})` }}
      className="flex flex-col  min-h-screen px-10 bg-no-repeat bg-center bg-cover relative"
    >
      <div className=" max-h-screen grid-rows-6 max-w-[1280px] bg-no-repeat bg-center  md:h-[85vh] grid grid-cols-12 gap-5 pt-3">
        <div className=" col-span-3 row-span-2   flex flex-col gap-3">
          <Clock />
          <Date />
        </div>
        <div className=" col-span-4 flex flex-col  gap-1  row-span-2 p-3 rounded-lg bg-white/10  backdrop-blur-md border border-white/15 shadow shadow-white/20 color">
          <div className="flex justify-between items-center">
            <h3 className="font-noto font-extrabold text-4xl text-black/90">
              Hello
            </h3>
            <Link
              to="/"
              className="bg-black/90 text-white p-1 rounded
            "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </Link>
          </div>
          <h4 className="text-2xl">
            I'm <span className="text-[#FFAA00] font-bold ">Thu Zin Htet</span>
          </h4>
          <p className=" text-white/20  ">
            <span className="text-revel">
              Frontend Developer with a passion for building dynamic web apps
              using React.
            </span>
          </p>
        </div>

        <div className="col-span-3 row-span-2 flex-col flex gap-3">
          <div className=" min-h-16    flex gap-2 ">
            <div className=" rounded-lg  w-20     aspect-square   flex items-center justify-center   bg-gray-400/50 backdrop-blur-md ">
              <img src={fb} className="w-12 " alt="" />
            </div>{" "}
            <div className="  rounded-lg  w-20     flex items-center justify-center   bg-gray-400/50 backdrop-blur-md ">
              <img src={tg} className="w-12 " alt="" />
            </div>{" "}
            <div className="  rounded-lg  w-20     flex items-center justify-center   bg-gray-400/50 backdrop-blur-md ">
              <img src={li} className="w-12  rounded-lg    " alt="" />
            </div>{" "}
            <div className="  rounded-lg  w-20   flex items-center justify-center   bg-gray-400/50 backdrop-blur-md ">
              <img src={gh} className="w-12 " alt="" />
            </div>
          </div>
          <AudioPlayer />
        </div>
        <div className=" col-span-2 row-span-3 rounded-lg overflow-hidden ">
          <img src={cv} alt="" className="rounded-md" height="100%" />
        </div>

        <div className=" col-span-3 row-span-3  overflow-hidden ">
          <Profile />
        </div>
        <div className=" col-span-3 row-span-2 rounded-lg p-3 bg-white/10  backdrop-blur border border-white/10 shadow shadow-white/20 bg-blend-color">
          <h2 className="font-noto font-extrabold text-3xl text-black/90">
            About Me
          </h2>
          <p className=" text-white/70">
            A Frontend Developer from Mandalay who loves building modern,
            responsive, and user-friendly web applications 🚀.{" "}
          </p>
        </div>
        <div className=" col-span-4 row-span-3   ">
          <img src={mockup} alt="" className="w-full rounded-lg" />{" "}
        </div>
        <div
          className=" col-span-2 row-span-2 flex flex-col
        "
        >
          <div className="w-full h-9 bg-gradient-to-b from-yellow-400 from-20% flex items-center justify-center font-roboto  to-yellow-500 shadow rounded-t-2xl text-center">
            <div className="flex text-slate-200 gap-2 justify-center items-center">
              <LuChartNoAxesCombined className=" text-slate-200" />{" "}
              <span> Roadmap </span>
            </div>
          </div>
          <div className="w-full flex-grow rounded-b-2xl shadow bg-slate-200 font-inter p-1 flex flex-col ">
            <span>✅ HTML , CSS</span>
            <span>✅ Javascript</span>
            <span>✅ React </span>
            <span> 🕗 PHP , Laravel </span>
          </div>
        </div>
        <code className=" col-span-3 rounded-lg shadow bg-slate-950 border shadow-white/50 border-black row-span-1  text-base text-white ps-1 flex items-center">
          {/* <p> 
       {`{"age":"${getDate().year - 2004}" , `}

          {`"contact":"Thuzinhtet.Dev@gmail.com"}`}{" "}
       </p> */}
          <TypeWriter />
        </code>

        <div className=" col-span-full rounded-lg     border-white/15 border backdrop-blur-xs shadow  shadow-white/40 bg-blend-color">
          <TechStack>
            <FaHtml5 className=" h-14 w-14 border backdrop-blur-sm bg-white/10  text-orange-600 rounded-md p-1 mx-4" />
            <IoLogoCss3 className=" h-14 w-14 border backdrop-blur-sm bg-white/10 text-blue-600 rounded-md p-1 mx-4" />
            <FaJs className=" h-14 w-14 border backdrop-blur-sm bg-white/10 text-[#FFD708] rounded-md p-1 mx-4" />
            <IoLogoReact className=" h-14 w-14 border backdrop-blur-sm bg-white/10 text-blue-600 rounded-md p-1 mx-4" />
            <SiTypescript className=" h-14 w-14 border backdrop-blur-sm bg-white/10 text-blue-800 rounded-md p-1 mx-4" />
            <SiNextdotjs className=" h-14 w-14 border backdrop-blur-sm bg-white/10 text-slate-700 rounded-md p-1 mx-4" />
            <SiTailwindcss className=" h-14 w-14 border backdrop-blur-sm bg-white/10 text-cyan-400 rounded-md p-1 mx-4" />
            <FaLaravel className=" h-14 w-14 border backdrop-blur-sm bg-white/10 text-red-600 rounded-md p-1 mx-4" />
            <SiMysql className=" h-14 w-14 border backdrop-blur-sm bg-white/10 text-sky-500 rounded-md p-1 mx-4" />
          </TechStack>
        </div>
      </div>
      <div className="      absolute left-0  bottom-2 z-10  h-[80px] w-full flex justify-center mt-auto">
        <div className="bg-[rgba(83,83,83,0.4)]  backdrop-blur border p-2  border-[rgba(83,83,83,0.18)] rounded-2xl flex gap-1 items-center h-auto  mt-auto">
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block hidden  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block hidden  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block hidden  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block hidden  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block hidden  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block hidden  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block hidden  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

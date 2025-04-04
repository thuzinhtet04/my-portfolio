import React, { forwardRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { Link } from "react-router";
import mockup from "../assets/mockup.jfif";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaPlayCircle } from "react-icons/fa";

const ProjectCard = ({ className }: { className: string }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x);
  const springY = useSpring(y);
  const rotateX = useTransform(springY, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["7deg", "-7deg"]);
  const handleMouseMove = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ): void => {
    const rect = (e.target as HTMLElement).getBoundingClientRect();
    const cardW = rect.width;
    const cardH = rect.height;
    const posMouseX = e.clientX - rect.left;
    const posMouseY = e.clientY - rect.top;
    const percentageX = posMouseX / cardW - 0.5;
    const percentageY = posMouseY / cardH - 0.5;
    x.set(percentageX);
    y.set(percentageY);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={` ${className} relative h-[400px]      rounded-md  shadow shadow-blue-900 bg-[#233aa4] text-slate-200`}
      aria-labelledby="React-Projects"
    >
      <div
        style={{ transformStyle: "preserve-3d", transform: "translateZ(50px)" }}
        className=" absolute inset-0  rounded-lg overflow-hidden bg-white/5  backdrop-blur-lg
        "
      >
        <Link
          to="/"
          className=" w-full bg-red-500  aspect-video overflow-hidden rounded  "
        >
          <img src={mockup} className="w-full" alt="" />
        </Link>
        <div className=" space-y-3 mt-3 p-2 ">
          <h3 className=" text-2xl font-bold font-inter">Todo Project</h3>
          <p className=" line-clamp-2">
            A simple and intuitive task management app with drag-and-drop
            functionality, priority settings, and due date reminders.
          </p>
          <div className=" flex gap-2">
            <IoLogoReact className=" h-7 w-7 border bg-gray-200 text-blue-600 rounded   " />
            <SiTypescript className=" h-7 w-7 border bg-gray-200 text-blue-800 rounded   " />
            <SiTailwindcss className=" h-7 w-7 border bg-gray-200 text-cyan-400 rounded   " />
          </div>
          <Link
            to="/"
            className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2"
          >
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                clipRule="evenodd"
              />
            </svg>
            Github
          </Link>
          <Link
            to="/"
            className="  bg-[#28199e] transition-colors duration-200 hover:text-[#28199e] hover:bg-[#beb6fc8d]   text-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#142a8f]/30 me-2 mb-2"
          >
            <FaPlayCircle className="size-4 me-2" />
            Demo
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

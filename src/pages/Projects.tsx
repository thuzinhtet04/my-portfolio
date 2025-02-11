import React, { useState } from "react";
import { useParams } from "react-router";
import mockup from "../assets/mockup.jfif";
import { Container } from "../components/Container";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaPlayCircle } from "react-icons/fa";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("React");
  return (
    <section className=" bg-[#493D9E]">
      <Container className="">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center "
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              onClick={() => {
                setActiveTab("React");
              }}
              className={`inline-block p-4 ${
                activeTab == "React"
                  ? "border-b-2 text-white"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-slate-400"
              } `}
              id="profile-tab"
              data-tabs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              React
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              onClick={() => {
                setActiveTab("Laravel");
              }}
              className={`inline-block p-4 ${
                activeTab == "Laravel"
                  ? "border-b-2 text-white"
                  : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 text-slate-400"
              } `}
              id="dashboard-tab"
              data-tabs-target="#dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
            >
              Laravel
            </button>
          </li>
        </ul>

        <div className=" mt-5">
          {activeTab === "React" && (
            <div className=" min-h-screen bg-[#493D9E] grid grid-cols-4 gap-5 ">
              <div
                className=" col-span-1 h-fit   rounded-md border border-blue-800 shadow shadow-blue-900 bg-[#344CB7] text-slate-200"
                aria-labelledby="React-Projects"
              >
                <div className=" w-full bg-red-500  aspect-video overflow-hidden rounded ">
                  <img src={mockup} className="w-full" alt="" />
                </div>
                <div className=" space-y-5 mt-5 p-2">
                  <h3 className=" text-2xl font-bold font-inter">
                    Todo Project
                  </h3>
                  <p className=" line-clamp-2">
                    A simple and intuitive task management app with
                    drag-and-drop functionality, priority settings, and due date
                    reminders.
                  </p>
                  <div className=" flex gap-2">
                    <IoLogoReact className=" h-7 w-7 border bg-gray-200 text-blue-600 rounded   " />
                    <SiTypescript className=" h-7 w-7 border bg-gray-200 text-blue-800 rounded   " />
                    <SiTailwindcss className=" h-7 w-7 border bg-gray-200 text-cyan-400 rounded   " />
                  </div>
                  <button
                    type="button"
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
                  </button>
                  <button
                    type="button"
                    className="  bg-[#142a8f]   focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 text-slate-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#142a8f]/30 me-2 mb-2"
                  >
                    <FaPlayCircle className="size-4 me-2" />
                    Demo
                  </button>
                </div>
              </div>
              <div
                className=" col-span-1  p-4   rounded-lg bg-violet-800"
                aria-labelledby="React-Projects"
              >
                <div className=" w-full bg-red-500  aspect-video ">
                  {/* <img src={mockup} className="w-full" alt="" /> */}
                </div>
              </div>
              <div
                className=" col-span-1  p-4   rounded-lg bg-violet-800"
                aria-labelledby="React-Projects"
              >
                <div className=" w-full bg-red-500  aspect-video ">
                  {/* <img src={mockup} className="w-full" alt="" /> */}
                </div>
              </div>
            </div>
          )}
          {activeTab === "Laravel" && (
            <div
              className=" p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
              id="dashboard"
              role="tabpanel"
              aria-labelledby="dashboard-tab"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                This is some placeholder content the{"{"}" "{"}"}
                <strong className="font-medium text-gray-800 dark:text-white">
                  Laravel
                </strong>
                . Clicking another tab will toggle the visibility of this one
                for the next. The tab JavaScript swaps classes to control the
                content visibility and styling.
              </p>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

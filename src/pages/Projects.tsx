import React, { useState } from "react";
import mockup from "../assets/mockup.jfif";
import { motion } from "motion/react";
import { Container } from "../components/Container";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaPlayCircle } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";

import w1 from "../assets/wallpaper1.jpg";
import Carousel from "../components/Carousel";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<string>("React");
  return (
    <section className=" bg-slate-800">
      <h3 className="text-slate-200 uppercase pt-1 underline underline-offset-4 font-inter  text-xl text-center">
        Projects
      </h3>
      <Container className="">
        <ul
          className="flex flex-wrap  text-sm font-medium text-center "
          id="default-tab"
          data-tabs-toggle="#default-tab-content"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              onClick={() => {
                setActiveTab("React");
              }}
              className={`inline-block p-2 ${
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
              className={`inline-block p-2 ${
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

        <div className=" mt-3">
          {activeTab === "React" && (
            <div className=" min-h-screen ">
              <Carousel />
            </div>
          )}
          {activeTab === "Laravel" && (
            <div className=" min-h-screen  ">
              <Carousel />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Projects;

import React from "react";
import { Link, Outlet, useLocation } from "react-router";

const Layout = () => {
  const location = useLocation();
  return (
    <div>
      <Outlet />
      <div className="      fixed left-0  bottom-2 z-10  h-[80px] w-full flex justify-center mt-auto">
        <div className="bg-[rgba(83,83,83,0.4)]  backdrop-blur border p-2  border-[rgba(83,83,83,0.18)] rounded-2xl flex gap-1 items-center h-auto  mt-auto">
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-200  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-200  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-200  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <div className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded ">
            <p className=" group-hover:block translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-200  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              helo
            </p>
          </div>{" "}
          <Link
            to="/wallpaper"
            className="app relative group w-[45px] h-[45px] duration-200 ease-in-out bg-black rounded"
            state={{ backgroundLocation: location }}
          >
            <p className=" group-hover:block translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-transform duration-200  absolute mx-auto left-[50%] -translate-x-[50%] -top-7 bg-slate-800 text-white text-sm p-0.5 rounded">
              wall
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;

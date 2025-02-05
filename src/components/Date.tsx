import React from "react";
import { getDate } from "../services/service";

const Date = () => {
  const date = getDate();
  return (
    <div className=" bg-white/80 backdrop-blur-sm relative max-h-full rounded-xl basis-[50%] flex items-center justify-between px-5 py-1">
      <div className="flex-grow font-semibold flex flex-col gap-0.5">
        <p className="text-5xl font-inter font-bold ">
          {date.date} {date.month}
        </p>
      </div>
      <div className="flex flex-col items-end">
      <p className="text-black/70 text-sm ">
          {date.date.length > 1 ? date.date : 0 + date.date}/
          {date.monthNumeric.length > 1
            ? date.monthNumeric
            : "0" + date.monthNumeric}
          /{date.day}
        </p>
        <span className="font-inter text-wrap text-4xl font-bold flex flex-col">
          {date.year}
        </span>
      </div>
     
   
    </div>
  );
};

export default Date;

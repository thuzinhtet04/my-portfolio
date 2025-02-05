import React, { useEffect, useState } from "react";
import { getTimeZone, getTime } from "../services/service.ts";

const Clock = () => {
  const [time, setTime] = useState<{ time: string; AmPm: string } | null>();
  const date = new Date();

  useEffect(() => {
    setTime(getTime());
    const interval = setInterval(() => {
      const clock = getTime();

      setTime(clock);
    }, 6000);

    return function () {
      clearInterval(interval);
    };
  }, []);
  //   const Iso = date.toISOString();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //   console.log(
  //     date.toLocaleTimeString([], {
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     })
  //   );
  //   console.log(
  //     date.toLocaleTimeString([], {
  //       hour12: false,
  //       hour: "2-digit",
  //       minute: "2-digit",
  //     })
  //   );
  //   console.log(date.toISOString());

  return (
    <div className=" bg-white/80 backdrop-blur-sm rounded-xl font-inter basis-[50%]  flex items-center justify-between px-5 py-1">
      <p className=" font-bold text-6xl">{time?.time}</p>{" "}
      <div className=" text-center">
        <p className="font-bold text-lg">{getTimeZone()}</p>
        <p className=" text-black/60 font-bold">{time?.AmPm}</p>
      </div>
    </div>
  );
};

export default Clock;

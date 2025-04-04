import { useNavigate } from "react-router";
import w1 from "../assets/wallpaper1.jpg";
import w2 from "../assets/wallpaper2.jpg";
import w3 from "../assets/wallpaper3.jpg";
import w4 from "../assets/wallpaper4.png";
import { IoClose } from "react-icons/io5";
import { MouseEvent } from "react";
  const ChangeWallpaper = () => {
  let navigate = useNavigate();


  const closeModal = (e : MouseEvent<HTMLButtonElement> ) => {
    e.stopPropagation();
    navigate(-1); // Go back one step in history
    };
  return (
  
    <div className="w-[500px]   p-2 pt-6 h-96 gap-2 bg-white/30 backdrop-blur-lg border border-white/40 rounded-[10px] items-stretch shadow-lg text-gray-500 shadow-black fixed top-0 m-auto left-0 right-0 bottom-0  grid grid-cols-2  ">
          <div
        draggable="false"
          className=" col-span-1 hover:scale-105  transition-all duration-100 active:scale-95 rounded  overflow-hidden  p-1 border border-black/70"
        >
          <img
          src={w1}
            className="w-full h-full cursor-pointer object-cover"
          alt=""
        />
      </div>
      <div className=" col-span-1 hover:scale-105   transition-all duration-100 active:scale-95 rounded  overflow-hidden  p-1 border border-black/70">
        <img
          src={w2}
          className="w-full h-full cursor-pointer object-cover"
          alt=""
        />
      </div>{" "} 
      <div className=" col-span-1 hover:scale-105  transition-all duration-100 active:scale-95 rounded  overflow-hidden  p-1 border border-black/70">
        <img
          src={w3}
          className="w-full h-full cursor-pointer object-cover"
          alt=""
        />
      </div>{" "}
      <div className=" col-span-1 hover:scale-105  transition-all duration-100 active:scale-95 rounded  overflow-hidden  p-1 border border-black/70">
        <img
          src={w4}
          className="w-full h-full cursor-pointer object-cover"
          alt=""
        />
      </div>
      <div className=" absolute left-1 top-0">
        <button onClick={(e) => closeModal(e)} className="rounded-full overflow-hidden cursor-pointer inline-block "><IoClose className="size-[14px] p-0 text-white bg-red-500 stroke-1 rounded-full"  /> 
          </button>

        </div>
      </div>
  );
};

export default ChangeWallpaper;

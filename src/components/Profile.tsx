import useEmblaCarousel from "embla-carousel-react";
import { useState } from "react";
import p1 from "../assets/profile1.jpg";
import p2 from "../assets/profile2.jpg";
import Autoplay from "embla-carousel-autoplay";

const Profile = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(0);
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);
  const images = [
    {
      src: p1,
    },
    {
      src: p2,
    },
  ];

  return (
    <div className="embla w-full" ref={emblaRef}>
      <div className="embla__container  ">
        <div className="embla__slide overflow-hidden bg-top rounded-lg bg-[url(/src/assets/profile1.jpg)] w-full h-full  border border-black/70">
          <img src={p1} className=" mx-auto " />
        </div>
        <div
          className={` overflow-hidden embla__slide  bg-top rounded-lg bg-[url(/src/assets/profile2.jpg)]  border border-black/70`}
        >
          <img
            onClick={() => {
              setOpen(true);
            }}
            src={p2}
            className={`  
             mx-auto `}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;

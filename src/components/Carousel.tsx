import React, { useCallback, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Carousel: React.FC<PropType> = () => {
  const slides = [1, 2, 3];
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  return (
    <section className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className=" flex py-2">
          {slides.map((index) => (
            <ProjectCard className="  basis-[25%] grow-0 shrink-0 mr-5" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Carousel;

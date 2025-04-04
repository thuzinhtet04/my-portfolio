import w1 from "../assets/wallpaper1.jpg";
import w2 from "../assets/wallpaper2.jpg";
import w3 from "../assets/wallpaper3.jpg";
import w4 from "../assets/wallpaper4.png";
import { useState } from "react";
import HeroSection from "../components/HeroSection";
import { useLocation } from "react-router";

const Home = () => {
  const [wIndex, setWIndex] = useState<number>(0);
  const wallpaper = [w1, w2, w3, w4];
  console.log("home munt");
  return (
    <section
      style={{ backgroundImage: `url(${wallpaper[wIndex]})` }}
      className="flex flex-col  min-h-screen px-10 bg-no-repeat bg-center bg-cover relative"
    >

      <HeroSection />
    </section>
  );
};

export default Home;

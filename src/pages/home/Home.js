import React from "react";
import HeroBanner from "../home/HeroBanner";
import Carousel from "../../components/carousel/Carousel";
import AriaSection from "./AriaSection";

const Home = () => {
  return (
    <div className="mt-[4rem]">
      <HeroBanner />
      <Carousel />
      <AriaSection />
    </div>
  );
};

export default Home;

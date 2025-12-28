import React from "react";
import PodcastCard from "../components/PodcastCard";
import { podcastData } from "../utils/SongData";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { nanoid } from "@reduxjs/toolkit";

const Podcasts = () => {
  const location = useLocation();


  const pd = podcastData;
  return (
    <div>
      <div className="p-8 mt-[50px]">
        <h1 className="text-2xl font-bold hover:underline cursor-pointer">
          All Podcasts
        </h1>
        <div className="mt-5 flex flex-wrap gap-5">
          {pd.map((one) => {
            return <PodcastCard key={nanoid()} data={one} />;
          })}
        </div>
      </div>
      <div>{location.pathname === "/home/podcasts" ? <Footer /> : null}</div>

      {/* <Footer/> */}
    </div>
  );
};

export default Podcasts;

import { Play } from "lucide-react";
import {
  dailyMix,
  popularArtist,
  recentlyPlayed,
  topTrack,
} from "../utils/SongData";
import SongsCategory from "../components/SongsCategory";
import PopularArtist from "../components/PopularArtist";
import Footer from "../components/Footer";
import { useLocation } from "react-router";
import { nanoid } from "@reduxjs/toolkit";

const Songs = () => {
  const location = useLocation();
  const recent = recentlyPlayed;
  const mix = dailyMix;
  const top = topTrack;
  const popular = popularArtist;
  return (
    <div className="mt-[50px]">
      <div className="pl-8 mt-8 ">
        <div className="flex justify-between text-end pr-5">
          <h1 className="text-2xl font-bold hover:underline cursor-pointer">
            Vaibhav Prajapati{" "}
            <span className="text-lg text-[#AEAEAE] ">(Daily Mix)</span>
          </h1>
          <p className="font-bold text-[#AEAEAE] text-end pt-2 text-md cursor-pointer hover:underline">
            Show all
          </p>
        </div>
        <div className="flex ">
          {mix.map((one) => {
            return <SongsCategory key={nanoid()} category={one} />;
          })}
        </div>
      </div>

      <div className="pl-8 mt-8 ">
        <div className="flex justify-between text-end pr-5">
          <h1 className="text-2xl font-bold hover:underline cursor-pointer">
            Recently Played
          </h1>
          <p className="font-bold text-[#AEAEAE] text-end pt-2 text-md cursor-pointer hover:underline">
            Show all
          </p>
        </div>
        <div className="flex overflow-x-auto scrollbar ">
          {recent.map((one) => {
            return <SongsCategory key={nanoid()} category={one} />;
          })}
        </div>
      </div>

      <div className="pl-8 mt-8 ">
        <div className="flex justify-between text-end pr-5">
          <h1 className="text-2xl font-bold hover:underline cursor-pointer">
            India's Best
          </h1>
          <p className="font-bold text-[#AEAEAE] text-end pt-2 text-md cursor-pointer hover:underline">
            Show all
          </p>
        </div>
        <div className="flex overflow-x-auto scrollbar ">
          {top.map((one) => {
            return <SongsCategory key={nanoid()} category={one} />;
          })}
        </div>
      </div>

      <div className="pl-8 mt-8 ">
        <div className="flex justify-between text-end pr-5">
          <h1 className="text-2xl font-bold hover:underline cursor-pointer">
            Popular Artist's
          </h1>
          <p className="font-bold text-[#AEAEAE] text-end pt-2 text-md cursor-pointer hover:underline">
            Show all
          </p>
        </div>
        <div className="flex overflow-x-auto scrollbar ">
          {popular.map((one) => {
            return <PopularArtist key={nanoid()} individual={one} />;
          })}
        </div>
      </div>

      {location.pathname === "/home/songs" ? <Footer /> : null}
    </div>
  );
};

export default Songs;

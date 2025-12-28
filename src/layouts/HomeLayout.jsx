import React from "react";
import Navbar from "../components/Navbar";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
import Player from "../components/Player";
import Home from "../components/Home";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="bg-[#000000] text-white h-screen">
      <Navbar />
      <div className="flex h-[80%] px-3 py-1 gap-2">
        <LeftSideBar />
        <Outlet/>
        <RightSideBar />
      </div>
      <Player />
    </div>
  );
};

export default HomeLayout;

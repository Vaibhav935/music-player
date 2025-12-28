import React from "react";
import { NavLink, Outlet } from "react-router";

const Home = ({ pages }) => {
  return (
    <div className=" bg-[linear-gradient(to_bottom,rgba(255,255,255,0.22)_0%,rgba(255,255,255,0.12)_18%,rgba(18,18,18,0.6)_45%,rgba(18,18,18,0.9)_70%,#181818_100%)] rounded-2xl w-[calc(100%-21%-1rem)] scrollbar overflow-auto ">
      <div className="pl-8 pt-3 flex gap-3 fixed bg-[#212121] rounded-t-2xl w-[calc(100%-30%)] z-100 pb-2">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1 bg-white text-black text-md rounded-full"
              : "px-4 py-1 text-md bg-[#5A5D5A] rounded-full "
          }
          to="/home"
          end
        >
          All
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1 bg-white text-black text-md rounded-full"
              : "px-4 py-1 text-md bg-[#5A5D5A] rounded-full "
          }
          to="/home/songs"
        >
          Music
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "px-4 py-1 bg-white text-black text-md rounded-full"
              : "px-4 py-1 text-md bg-[#5A5D5A] rounded-full "
          }
          to="/home/podcasts"
        >
          Podcasts
        </NavLink>
      </div>
      <div className="overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;

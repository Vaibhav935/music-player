import { MoveDiagonal, Plus, Search } from "lucide-react";
import React from "react";
import LeftSideBarCard from "./LeftSideBarCard";

const LeftSideBar = () => {

    const data = [
        {
            id:1,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9rMeO7ak69ZrSsIlCHtNfZv2Fie-ki1oYVNpfTPv8FzpNWZyiFtPX68UChyc7pKObJx6lEI4ye1hckQhmC4Iw5Cu8nWGIzUoZaTbkUQ&s=10",
            title: "Taylor Swift",
            tag: "Artist"
        },
        {
            id:2,
            img: "https://m.media-amazon.com/images/M/MV5BMjM1NTA0NDYzM15BMl5BanBnXkFtZTgwNzg5OTYyNjM@._V1_FMjpg_UX1000_.jpg",
            title: "Liam Payne",
            tag: "Artist"
        },
        {
            id:3,
            img: "https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_m_1739172212.jpg",
            title: "Arijit Singh",
            tag: "Artist"
        },
        {
            id:4,
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShLl_hhHLXtnYMd9iPiS9rxc4VSHoLDGyWMA&s",
            title: "Neha Kakkar",
            tag: "Artist"
        }
    ]

  return (
    <div className="bg-[#121212] w-[30%] rounded-2xl h-full p-3 pt-5">
      <header className="flex items-center justify-between px-2">
        <div className="flex items-center gap-2">
          <div>
            <svg
              fill="white"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="h-3.5 e-91000-icon e-91000-baseline e-91000-icon--auto-mirror p-0"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 5.47a.75.75 0 1 1 1.06 1.06L10.56 8l1.47 1.47a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1 0-1.06z"></path>
              <path d="M1 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm.5 1.5H5v13H1.5zm13 13h-8v-13h8z"></path>
            </svg>
          </div>
          <h1 className="text-sm font-bold">Your Library</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center px-3 py-1 bg-[#2A2A2A] rounded-full gap-2 ">
            <Plus size={18} color="#ffffff" />
            <h1 className="font-bold text-sm">Create</h1>
          </div>
          <div className="flex items-center">
            <MoveDiagonal size={20} color="#ffffff" className="m-0" />
          </div>
        </div>
      </header>
      <div className="flex gap-3 mt-6 px-2">
        <h1 className="px-3 py-1.5 cursor-pointer bg-[#2A2A2A] font-semibold text-sm rounded-full">Artists</h1>
        <h1 className="px-3 py-1.5 cursor-pointer bg-[#2A2A2A] font-semibold text-sm rounded-full">Podcasts & Shows</h1>
      </div>
      <div className="flex items-center justify-between mt-4 text-[#abaaaa] px-2">
        <div className="cursor-pointer">
            <Search size={17} color="#abaaaa" />
        </div>
        <div className="flex items-center gap-2">
            <h1>Recent's</h1>
            <svg fill="#abaaaa" data-encore-id="icon" role="img" aria-hidden="true" className="h-4 e-91000-icon e-91000-baseline e-91000-icon--auto-mirror cursor-pointer" viewBox="0 0 16 16" ><path d="M15 14.5H5V13h10zm0-5.75H5v-1.5h10zM15 3H5V1.5h10zM3 3H1V1.5h2zm0 11.5H1V13h2zm0-5.75H1v-1.5h2z"></path></svg>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-lg py-2 px-1.5 mt-4 cursor-pointer hover:bg-[#1F1F1F]">
        <div className=" rounded-lg overflow-hidden ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRe9AcRy8jAMgBHmpCDtcAlZCQVra2CSL-w&s" alt="" className="object-cover w-12 rounded-lg " />
        </div>
        <div>
            <h1 className="" >Liked Songs</h1>
            <p className="text-[#AEAEAE] text-sm"><span>pin</span> Playlist <span>num</span></p>
        </div>
      </div>

       {
        data.map((card)=> {
            return <LeftSideBarCard key={card.id} card={card} />
        })
       }

    </div>
  );
};

export default LeftSideBar;

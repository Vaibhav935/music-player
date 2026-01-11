import React, { useState } from "react";
import Footer from "./Footer";
import { Shuffle } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeLike } from "../features/likedSlice";

const Playlist = () => {
  const { likedList } = useSelector((state) => state.liked);
  const dispatch = useDispatch()


  return (
    <div className="rounded-2xl w-[calc(100%-21%-1rem)] scrollbar overflow-auto  bg-[linear-gradient(to_bottom,#5b3fdc_0%,#4b2fa8_20%,rgba(18,18,18,0.6)_45%,rgba(18,18,18,0.9)_70%,#181818_100%)] ">
      <div class="p-7 ">
        <header className="flex gap-5">
          <div>
            <img
              className="w-50 rounded-2xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRe9AcRy8jAMgBHmpCDtcAlZCQVra2CSL-w&s"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center whitespace-nowrap">
            <p className="text-sm">Playlist</p>
            <h1 className="font-bold text-[5.5rem] leading-none">
              Liked Songs
            </h1>
            <p>songs count</p>
          </div>
        </header>
        <div className="mt-5 min-h-80 bg-transparent border-t border-t-gray-800">
          <div className="py-3 flex gap-5 items-center justify-between">
            <div className="flex gap-5 items-center ">
              <div className=" p-4.5 bg-[#1DD65F] rounded-full cursor-pointer w-fit">
                <svg
                  fill="black"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className="play h-3 e-91000-icon e-91000-baseline"
                  viewBox="0 0 16 16"
                >
                  <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
                </svg>
              </div>

              <div className="cursor-pointer">
                <svg
                  fill="#888"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  class="h-7 e-91000-icon e-91000-baseline"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.788 3.702a1 1 0 0 1 1.414-1.414L23.914 6l-3.712 3.712a1 1 0 1 1-1.414-1.414L20.086 7h-1.518a5 5 0 0 0-3.826 1.78l-7.346 8.73a7 7 0 0 1-5.356 2.494H1v-2h1.04a5 5 0 0 0 3.826-1.781l7.345-8.73A7 7 0 0 1 18.569 5h1.518l-1.298-1.298z"></path>
                  <path d="M18.788 14.289a1 1 0 0 0 0 1.414L20.086 17h-1.518a5 5 0 0 1-3.826-1.78l-1.403-1.668-1.306 1.554 1.178 1.4A7 7 0 0 0 18.568 19h1.518l-1.298 1.298a1 1 0 1 0 1.414 1.414L23.914 18l-3.712-3.713a1 1 0 0 0-1.414 0zM7.396 6.49l2.023 2.404-1.307 1.553-2.246-2.67a5 5 0 0 0-3.826-1.78H1v-2h1.04A7 7 0 0 1 7.396 6.49"></path>
                </svg>
              </div>

              <div className="cursor-pointer">
                <svg
                  fill="#888"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  class="h-7 e-91000-icon e-91000-baseline"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12"></path>
                  <path d="M12 6.05a1 1 0 0 1 1 1v7.486l1.793-1.793a1 1 0 1 1 1.414 1.414L12 18.364l-4.207-4.207a1 1 0 1 1 1.414-1.414L11 14.536V7.05a1 1 0 0 1 1-1"></path>
                </svg>
              </div>
            </div>

            <div className="flex gap-4 items-center cursor-pointer">
              <p>List</p>
              <svg
                fill="white"
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                class="h-4 e-91000-icon e-91000-baseline e-91000-icon--auto-mirror"
                viewBox="0 0 16 16"
              >
                <path d="M15 14.5H5V13h10zm0-5.75H5v-1.5h10zM15 3H5V1.5h10zM3 3H1V1.5h2zm0 11.5H1V13h2zm0-5.75H1v-1.5h2z"></path>
              </svg>
            </div>
          </div>
          <div className=" text-white">
            <div className="flex items-center border-b border-gray-600">
              <div className="px-4 py-2.5">#</div>
              <div className="flex w-1/2 px-4 py-2.5">Title</div>
              <div className="flex grow px-4 py-2.5">Artist</div>
            </div>
            <div className="pt-3">
              {likedList.map((e, i) => (
                <div className="flex items-center hover:bg-gray-300/7 rounded ">
                  <div className="px-4 py-2.5">{i + 1}</div>
                  <div className="flex w-1/2 px-4 py-2.5 items-center gap-2">
                    <img className="w-10 h-10 rounded-md" src={e.img} alt="" />
                    <h1 className=" hover:underline cursor-pointer">
                      {e.title}
                    </h1>
                  </div>
                  <div className="flex grow px-4 py-2.5 hover:underline cursor-pointer">
                    {e.artist}
                  </div>
                  <div 
                  onClick={()=> dispatch(removeLike(e))}
                  className="px-6 cursor-pointer font-semibold text-sm hover:text-red-500">
                    X
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Playlist;

import { CirclePlus, Ellipsis } from "lucide-react";
import React from "react";

const PodcastCard = ({ data }) => {
  return (
    <div
    style={{ backgroundColor: data.color }}
      className={`p-3 w-100  rounded-lg cursor-pointer hover:opacity-95`}
    >
      <header className="flex gap-5">
        <div>
          <img
            className="w-20 h-20 object-cover rounded-lg bg-center "
            src={data.titleImg}
            alt=""
          />
        </div>
        <div>
          <h1 className="font-bold text-xl">{data.title}</h1>
          <div className="flex text-sm gap-5 font-bold">
            <p className="text-gray-400 ">{data.tag}</p>
            <p>{data.creatorName}</p>
          </div>
        </div>
      </header>
      <section className="py-10">
        <img
          className="shadow-2xl hover:scale-101 w-90 h-50 object-cover rounded-lg"
          src={data.coverImg}
          alt=""
        />
      </section>
      <footer className="flex justify-between items-center">
        <div>
          <div className="flex items-center bg-gray-400 h-fit px-4 rounded-full  py-0.5 gap-2">
            <svg
              fill="white"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="h-4 e-91000-icon e-91000-baseline"
              viewBox="0 0 16 16"
            >
              <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06"></path>
              <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.64 3.64 0 0 0-1.33 4.967 3.64 3.64 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.7 4.7 0 0 1-1.5-.694v1.3L2.817 9.852a2.14 2.14 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694z"></path>
            </svg>
            <span>Preview Episode</span>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Ellipsis size={20} color="#ffffff" strokeWidth={3} />
          <CirclePlus size={20} color="#ffffff" strokeWidth={3} />
          <div className=" p-4 bg-white rounded-full w-fit hover:bg-[#1DD65F]">
            <svg
              fill="black"
              data-encore-id="icon"
              role="img"
              aria-hidden="true"
              className="h-3 e-91000-icon e-91000-baseline"
              viewBox="0 0 16 16"
            >
              <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288z"></path>
            </svg>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PodcastCard;

import React from 'react'

const PopularArtist = ({individual}) => {
  return (
    <div className="pt-3">
      <div className="hover:bg-[#1F1F1F] rounded-lg overflow-hidden p-2 cursor-pointer w-fit relative">
        <div>
          <img
            className="w-40 h-40 rounded-full object-cover"
            src={individual.img}
            alt=""
          />
        </div>
        <h2 className="text-[#AEAEAE] text-sm mt-1 ">{individual.title}</h2>

        <div className="absolute top-0 h-full w-full bg-[#494A49] opacity-0 hover:bg-transparent hover:opacity-100 flex items-center z-99">
          <div
          onClick={()=> console.log("played song")}
           className="absolute p-3 bg-[#1DD65F] rounded-full right-8 top-30 ">
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
      </div>
    </div>
  )
}

export default PopularArtist

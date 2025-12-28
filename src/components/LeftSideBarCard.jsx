import React from "react";

const LeftSideBarCard = ({card}) => {
  return (
    <>
      <div className="flex items-center gap-3 rounded-lg py-2 px-1.5 mt-1 cursor-pointer hover:bg-[#1F1F1F]">
        <div className=" rounded-full overflow-hidden ">
          <img
            src={card.img}
            alt=""
            className="object-cover w-12 h-12 rounded-lg "
          />
        </div>
        <div>
          <h1 className="">{card.title}</h1>
          <p className="text-[#AEAEAE] text-sm">
            {card.tag}
          </p>
        </div>
      </div>
    </>
  );
};

export default LeftSideBarCard;

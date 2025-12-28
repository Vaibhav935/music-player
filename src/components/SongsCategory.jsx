import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, PlayPause } from "../features/songSlice";

const SongsCategory = ({ category }) => {
  const dispatch = useDispatch();
  let { currentSong, isPlaying } = useSelector((state) => state.song);

  return (
    <div className="pt-3">
      <div className="hover:bg-[#1F1F1F] rounded-lg overflow-hidden p-2 cursor-pointer w-fit relative">
        <div>
          <img
            className="w-40 h-40 rounded-lg object-cover"
            src={category.img}
            alt=""
          />
        </div>
        <h2 className="text-[#AEAEAE] text-sm mt-1 ">{category.title}</h2>

        {currentSong?.id === category.id ? (
          isPlaying ? (
            <div
              className={`absolute top-0 h-full w-full bg-[#494A49] opacity-0 hover:bg-transparent hover:opacity-100 flex items-center z-99 ${
                isPlaying
                  ? category.id === currentSong?.id
                    ? `opacity-100 bg-transparent `
                    : `opacity-0 z-0`
                  : null
              } `}
            >
              <div
                onClick={() => dispatch(PlayPause())}
                className="absolute p-3 bg-[#1DD65F] rounded-full right-8 top-30 "
              >
                <svg
                  fill="black"
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className="pause h-3 e-91000-icon e-91000-baseline"
                  viewBox="0 0 16 16"
                >
                  <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7z"></path>
                </svg>
              </div>
            </div>
          ) : (
            <div
              className={`absolute top-0 h-full w-full bg-[#494A49] opacity-0 hover:bg-transparent hover:opacity-100 flex items-center z-99 ${
                isPlaying
                  ? category.id === currentSong?.id
                    ? `opacity-100 bg-transparent `
                    : `opacity-0`
                  : null
              } `}
            >
              <div
                onClick={() => dispatch(PlayPause())}
                className="absolute p-3 bg-[#1DD65F] rounded-full right-8 top-30 "
              >
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
            </div>
          )
        ) : (
          <div
            className={`absolute top-0 h-full w-full bg-[#494A49] opacity-0 hover:bg-transparent hover:opacity-100 flex items-center z-99 ${
              isPlaying
                ? category.id === currentSong?.id
                  ? `opacity-100 bg-transparent `
                  : `opacity-0`
                : null
            } `}
          >
            <div
              onClick={() => dispatch(addSong(category))}
              className="absolute p-3 bg-[#1DD65F] rounded-full right-8 top-30 "
            >
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
          </div>
        )}

        {/* <div className={`absolute top-0 h-full w-full bg-[#494A49] opacity-0 hover:bg-transparent hover:opacity-100 flex items-center z-99 ${isPlaying ? category.id === currentSong?.id ? `opacity-100 bg-transparent ` : `opacity-0` : null} `}>
          <div
            onClick={() => dispatch(PlayPause())}
            className="absolute p-3 bg-[#1DD65F] rounded-full right-8 top-30 "
          >
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
        </div> */}
      </div>
    </div>
  );
};

export default SongsCategory;

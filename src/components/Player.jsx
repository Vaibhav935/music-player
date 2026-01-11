import {
  LayersPlus,
  Maximize,
  MicVocal,
  MonitorSpeaker,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
} from "lucide-react";
import moment from 'moment'
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSong, PlayPause } from "../features/songSlice";
import { recentlyPlayed } from "../utils/SongData";

const Player = () => {

  const [currentTime, setCurrentTime] = useState('')
  const [duration,setDuration] = useState("")


  const audioRef = useRef();
  const dispatch = useDispatch();
  let { currentSong, isPlaying } = useSelector((state) => state.song);
  const songs = recentlyPlayed;

  const cS = songs.find((n) => n?.id === currentSong?.id);


  const handleProgressTime = () => {
    setCurrentTime(audioRef.current.currentTime)
    setDuration(audioRef.current.duration)
  };

  const formatTime = (time) => {
    return moment.utc(time* 1000 ).format("mm:ss")
  }

  const handleSeekTime = (e) => {
    let newT = e.target.value;
    audioRef.current.currentTime = newT;
    setCurrentTime(newT);
  };

  const nextSong = () => {
    if (Number(cS.id) === Number(songs.length - 1)) {
      dispatch(addSong(songs[0]));
      return;
    }

    const nextS = songs[cS.id + 1];
    dispatch(addSong(nextS));
  };

  const prevSong = () => {
    if (Number(cS.id) === 0) {
      dispatch(addSong(songs[songs.length - 1]));
      return;
    }

    const prevS = songs[cS.id - 1];
    dispatch(addSong(prevS));
  };

  useEffect(() => {
    if (currentSong && isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong, isPlaying]);

  return (
    <div className="bg-[#000000] h-[12%] px-3 py-2 flex items-center justify-between">
      <div className="flex gap-2 ">
        <img
          className="h-15 w-15 rounded object-cover bg-top  "
          src={currentSong?.img}
          alt=""
        />
        <div className="flex flex-col justify-center">
          <h1 className="font-bold  text-lg hover:underline cursor-pointer">
            {currentSong?.title}
          </h1>
          <p className="text-gray-400 text-xs font-bold hover:underline cursor-pointer">
            Song Details
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex gap-5 justify-center">
          <div className="p-2 bg-[#212121] rounded-full cursor-pointer  flex items-center justify-center active:scale-95">
            <Shuffle size={20} color="#ffffff" strokeWidth={2} />
          </div>
          <div
            onClick={() => prevSong()}
            className="p-2 bg-[#212121] rounded-full cursor-pointer  flex items-center justify-center active:scale-95"
          >
            <SkipBack size={20} color="#ffffff" />
          </div>

          {isPlaying ? (
            <div
              onClick={() => dispatch(PlayPause())}
              className=" p-3 bg-[#1DD65F] rounded-full cursor-pointer"
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
          ) : (
            <div
              onClick={() => dispatch(PlayPause())}
              className=" p-3 bg-[#1DD65F] rounded-full cursor-pointer"
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
          )}

          <div
            onClick={() => nextSong()}
            className="p-2 bg-[#212121] rounded-full cursor-pointer  flex items-center justify-center active:scale-95"
          >
            <SkipForward size={20} color="#ffffff" />
          </div>
          <div className="p-2 bg-[#212121] rounded-full cursor-pointer  flex items-center justify-center active:scale-95">
            <Repeat size={20} color="#ffffff" />
          </div>
        </div>
        <div className="flex  gap-5 items-center">
          <div>{formatTime(currentTime)}</div>
          <div>
            <input 
            min={0}
            max={duration || 0}
            value={currentTime}
            onChange={handleSeekTime}
            className="w-100  slider" type="range" name="music" id="" />
          </div>
          <div>{formatTime(duration)}</div>
        </div>
      </div>

      <div className="flex gap-5 items-center px-3">
        <div className="cursor-pointer hover:bg-[#212121] rounded-full p-1">
          <MicVocal size={20} color="#ffffff" />
        </div>
        <div className="cursor-pointer hover:bg-[#212121] rounded-full p-1">
          <LayersPlus size={20} color="#ffffff" />
        </div>
        <div className="cursor-pointer hover:bg-[#212121] rounded-full p-1">
          <MonitorSpeaker size={20} color="#ffffff" />
        </div>
        <div className="cursor-pointer hover:bg-[#212121] rounded-full p-1">
          <Maximize size={20} color="#ffffff" />
        </div>
      </div>

      <audio onTimeUpdate={handleProgressTime} ref={audioRef} src={currentSong?.src}></audio>
    </div>
  );
};

export default Player;

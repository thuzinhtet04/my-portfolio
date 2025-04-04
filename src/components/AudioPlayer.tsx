import { ChangeEvent, useEffect, useRef, useState } from "react";

import song1 from "../assets/audio/audio.mp3";
import song2 from "../assets/audio/audio2.mp3";
import img1 from "../assets/audio1.jpg";
import img2 from "../assets/audio2.jpg";
const songs: {
  [key: string]: string;
}[] = [
  {
    audio: song1,
    img: img1,
    name: "helo1",
    artist: "take1",
  },
  {
    audio: song2,
    img: img2,
    name: "helo2",
    artist: "take2",
  },
];

const AudioPlayer = () => {
  const [audioIndex, setAudioIndex] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const setAudioData = () => setDuration(audioRef?.current!.duration);
  const seek = (e: ChangeEvent<HTMLInputElement>) => {
    const newTime: number = ((Number(e.target!?.value) / 100) *
      duration) as number;
    audioRef.current!.currentTime = newTime;
    setCurrentTime(newTime);
  };

  useEffect(() => {
    if (!audioRef) return;
    audioRef.current!.addEventListener("loadedmetadata", setAudioData);
    const updateTime = () => {
      setCurrentTime(audioRef?.current!.currentTime);
    };
    audioRef.current!.addEventListener("timeupdate", updateTime);
    if (isPlaying) {
      audioRef?.current!.play();
    }

    return () => {
      audioRef.current!?.removeEventListener("timeupdate", updateTime);
      audioRef.current!?.removeEventListener("loadedmetadata", setAudioData);
    };
  }, [audioIndex]);

  console.log(audioRef.current?.duration);

  return (
    // <div>
    //   <audio ref={audioRef} src="../audio.mp3" controls></audio>
    //   <div className=" h-2 w-96 bg-black border border-red-400"></div>
    //   <input
    //     className="w-50 h-2 bg-red-400 "
    //     type="range"
    //     min={0}
    //     max={100}
    //     value={duration ? (currentTime / duration) * 100 : 0}
    //     onChange={(e) => {
    //       seek(e);
    //     }}
    //   />

    //   <button
    //     onClick={() => {
    //       audioRef.current?.play();
    //     }}
    //   >
    //     play
    //   </button>
    //   <button>next</button>
    //   <button>prev</button>
    //   <button
    //     onClick={() => {
    //       audioRef.current?.pause();
    //     }}
    //   >
    //     pause
    //   </button>
    //   <p>{formatTime(currentTime)}</p>
    //   <p>=================</p>
    //   <p>{formatTime(duration)}</p>
    // </div>

    <div className=" flex-grow rounded-lg bg-white/20 backdrop-blur-md shadow-sm shadow-white border border-white/15 p-0.5 flex  ">
      <div className=" w-[60px] max-h-full bg-black rounded-lg overflow-hidden">
        <img
          className=" w-fit h-fit object-left-top "
          src={songs[audioIndex].img}
          alt=""
        />
      </div>

      <div className=" flex flex-col items-center gap-2  flex-grow">
        <audio
          ref={audioRef}
          src={songs[audioIndex].audio}
          hidden
          
        ></audio>
        <div className="flex gap-1 p-1 text-sm text-white/80">
          <h3>{songs[audioIndex].name}</h3>
          <span>/</span>
          <h3>{songs[audioIndex].artist} </h3>
        </div>
        <input
          type="range"
          className="h-1 appearance-none w-[90%] bg-gray-700"
          min={0}
          value={duration ? (currentTime / duration) * 100 : 0}
          max={100}
          onChange={(e) => {
            seek(e);
          }}
              />
        <div className="flex gap-5 p-0.5 text-white/70">
          <button
            onClick={() => {
              setAudioIndex((audioIndex - 1 + songs.length) % songs.length);
            }}
            className=" prev active:scale-90 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
                stroke="currentColor"
              className="size-4 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              if (isPlaying) {
                setIsPlaying(false);
                audioRef.current!.pause();
              } else {
                setIsPlaying(true);
                audioRef.current!.play();
              }
            }}
            className="play cursor-pointer active:scale-90"
          >
            {" "}
            {isPlaying ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
                />
              </svg>
            )}
          </button>
          <button
            onClick={() => {
              setAudioIndex((audioIndex + 1) % songs.length);
            }}
            className="next active:scale-90 cursor-pointer "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;

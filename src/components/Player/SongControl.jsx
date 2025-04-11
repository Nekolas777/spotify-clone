import * as Slider from "@radix-ui/react-slider";
import { usePlayerStore } from "../../store/playerStore";
import { useEffect, useState } from "react";
import { formatTime } from "../../utils/helpers/formatTime";

export const SongControl = () => {
  const { currentMusic, progress, setProgress, setIsPlaying, audioRef } =
    usePlayerStore();

  useEffect(() => {
    const handleTimeUpdate = () => {
      if (audioRef.current) {
        const currentTime = audioRef.current.currentTime;
        const duration = audioRef.current.duration;
        setProgress((currentTime / duration) * 100);
      }
    };

    const handleAudioEnded = () => {
      setProgress(0);
      setIsPlaying(false);
      audioRef.current.currentTime = 0;
    };

    if (audioRef.current) {
      /* console.log("AudioRef: ", audioRef.current); */
      audioRef.current?.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current?.addEventListener("ended", handleAudioEnded);
    }

    return () => {
      if (audioRef.current) {
        audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current?.removeEventListener("ended", handleAudioEnded);
      }
    };
  }, [progress]);

  const handleValueChange = (value) => {
    if (audioRef.current) {
      const duration = audioRef.current.duration || 1;
      audioRef.current.currentTime = (value[0] / 100) * duration;
    }
  };

  return (
    <div className='flex flex-row gap-3 items-center bg-black text-white w-full justify-center'>
      <h1
        className='text-xs xs:text-sm text-[#b3b3b3]'
        aria-label='Tiempo actual'
      >
        {formatTime(audioRef.current?.currentTime) || "0:00"}
      </h1>
      <Slider.Root
        className='w-full min-w-[75px] max-w-[550px] relative flex items-center cursor-pointer'
        value={[progress]}
        max={100}
        min={0}
        step={1}
        onValueChange={handleValueChange}
        aria-label='Control deslizante progreso de la canción'
      >
        <Slider.Track className='bg-gray-600 relative flex-grow h-1 rounded-full'>
          <Slider.Range className='absolute bg-green-500 h-full rounded-full' />
        </Slider.Track>
        <Slider.Thumb
          className='block w-3 h-3 bg-white rounded-full shadow-md'
          aria-label='Control deslizante para ajustar el progreso de la canción'
          aria-valuenow={0}
        />
      </Slider.Root>
      <h1
        className='text-xs xs:text-sm text-[#b3b3b3]'
        aria-label='Duración total'
      >
        {currentMusic.song.duration}
      </h1>
    </div>
  );
};

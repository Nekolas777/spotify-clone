import { BackwardStep } from "../../icons/BackwardStep";
import { ForwardStep } from "../../icons/ForwardStep";
import { Pause } from "../../icons/Pause";
import { Play } from "../../icons/Play";
import { Repeat } from "../../icons/Repeat";
import { Shuffle } from "../../icons/Shuffle";
import { SongControl } from "./SongControl";
import { usePlayerStore } from "../../store/playerStore";
import { useEffect, useRef } from "react";

export const PlayerControl = () => {
  const { currentMusic, isPlaying, setIsPlaying, audioRef, setAudioRef } =
    usePlayerStore();

  useEffect(() => {
    if (audioRef.current) {
      // actualziamos la fuente del audio cuando cambie la canción
      audioRef.current.src = currentMusic.song.musicPath;
      audioRef.current.load();

      // reproducimos la canción si el estado isPlaying es true
      if (isPlaying) {
        audioRef.current.play();
      }
    }
  }, [currentMusic.song.musicPath]);

  const handlePlayButton = () => {
    if (!audioRef.current) return;

    isPlaying ? audioRef.current.pause() : audioRef.current.play();

    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Space") {
        event.preventDefault();
        handlePlayButton();
      }
    };

    window.addEventListener("keyup", handleKeyDown);

    return () => {
      window.removeEventListener("keyup", handleKeyDown);
    };
  }, [isPlaying]);

  return (
    <div className='flex flex-col items-center gap-1 w-full flex-1'>
      <audio ref={audioRef} preload='auto' />
      <div className='flex flex-row gap-6 items-center'>
        <figure
          className='hidden sm:block fill-[#B4B4B8]'
          aria-label='Activar reproducción aleatoria'
          role='button'
          tabIndex={0}
        >
          <Shuffle
            aria-label='Retroceder canción'
            role='button'
            tabIndex={0}
            size={4}
          />
        </figure>
        <BackwardStep
          aria-label='Retroceder canción'
          role='button'
          tabIndex={0}
        />
        <button
          onClick={handlePlayButton}
          className='p-2 bg-white rounded-full cursor-pointer hover:opacity-90 hover:scale-105'
          aria-label={isPlaying ? "Pausar canción" : "Reproducir canción"}
        >
          {isPlaying ? <Pause size='16px' /> : <Play size='16px' />}
        </button>
        <ForwardStep aria-label='Avanzar canción' role='button' tabIndex={0} />
        <figure
          className='hidden sm:block'
          aria-label='Repetir canción'
          role='button'
        >
          <Repeat />
        </figure>
      </div>
      <SongControl />
    </div>
  );
};

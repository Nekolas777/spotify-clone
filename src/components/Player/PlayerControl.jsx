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

  const { currentMusic, isPlaying, setIsPlaying } = usePlayerStore();
  const audioRef = useRef(null);

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
  }, [currentMusic]);
  

  const handlePlayButton = () => {
    if(!audioRef.current) return;

    (isPlaying) ? audioRef.current.pause() : audioRef.current.play();

    setIsPlaying(!isPlaying);
  }

  return (
    <div className="flex flex-col items-center gap-1.5">
      <audio ref={audioRef} preload="auto" />
      <div className="flex flex-row gap-6 items-center">
        <Shuffle size={4}/>
        <BackwardStep/>
        <button onClick={handlePlayButton} className="p-2.5 bg-white rounded-full">
          {
            isPlaying ? <Pause/> : <Play size="16px"/>
          }
          {/* <Pause/> */}
        </button>
        <ForwardStep/>
        <Repeat/>
      </div>
      <div>
        <SongControl audioRef={audioRef}/>
      </div>
    </div>
  );
};

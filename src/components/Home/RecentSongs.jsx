import { useState } from "react";
import { Pause } from "../../icons/Pause.jsx";
import { Play } from "../../icons/Play.jsx";
import { usePlayerStore } from "../../store/playerStore.js";

export const RecentSongs = ({ songs }) => {
  const {
    setCurrentMusic,
    currentMusic,
    isPlaying,
    setIsPlaying,
    setProgress,
    audioRef,
  } = usePlayerStore();

  const [hoveredSongId, setHoveredSongId] = useState(null);

  const handleSongClick = (song) => {
    if (song.id !== currentMusic.song.id) {
      // Cambiar la canción solo si es diferente
      setCurrentMusic({
        ...currentMusic,
        song: song,
      });
      setIsPlaying(true); // Reproducir la nueva canción
      setProgress(0); // Reiniciar el progreso
    } else {
      // Si es la misma canción, alternar reproducción/pausa
      setIsPlaying(!isPlaying);
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  const handlePauseClick = () => {
    if (audioRef.current) audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <div className='songs-cards'>
      {songs?.slice(0, 8).map((song) => {
        const isCurrentSong = song.id === currentMusic.song.id;

        return (
          <div
            key={song.id}
            className='bg-[hsla(0,0%,100%,.07)] flex flex-row cursor-pointer
          hover:bg-[hsla(0,0%,100%,.2)] transition-all duration-300 ease'
            data-color={song.color?.accent}
            onMouseEnter={() => setHoveredSongId(song.id)}
            onMouseLeave={() => setHoveredSongId(null)}
          >
            <img src={song.bannerImage} className='w-16 h-16' />
            <div className='flex flex-row items-center w-full px-3'>
              <span className='text-base font-medium flex-1'>{song.title}</span>

              {/* Mostrar el GIF o el botón Pause */}
              {isCurrentSong && isPlaying ? (
                hoveredSongId === song.id ? (
                  <div
                    className='rounded-full bg-green-500 p-2 cursor-pointer flex items-center justify-center
              hover:scale-105 transition-all duration-200 ease-out shadow-below'
                    onClick={handlePauseClick}
                  >
                    <Pause />
                  </div>
                ) : (
                  <img
                    src='/img/current-music.gif'
                    alt='Playing'
                    className='w-4 h-4 mr-2'
                  />
                )
              ) : (
                <div
                  className='rounded-full bg-green-500 p-2 cursor-pointer flex items-center justify-center
          hover:scale-105 transition-all duration-200 ease-out shadow-below'
                  onClick={() => handleSongClick(song)}
                >
                  <Play />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

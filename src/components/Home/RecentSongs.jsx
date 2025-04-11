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
      setCurrentMusic({
        ...currentMusic,
        song: song,
      });
      setIsPlaying(true);
      setProgress(0);
    } else {
      // si es la misma canción, alternar reproducción/pausa osisi
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
    <div className='@container songs-cards px-5'>
      {songs?.slice(0, 8).map((song) => {
        const isCurrentSong = song.id === currentMusic.song.id;

        return (
          <div
            key={song.id}
            className='bg-[hsla(0,0%,100%,.07)] flex flex-row cursor-pointer select-none
          hover:bg-[hsla(0,0%,100%,.2)] transition-all duration-300 ease'
            data-color={song.color?.dark}
            onMouseEnter={() => setHoveredSongId(song.id)}
            onMouseLeave={() => setHoveredSongId(null)}
            aria-label={`Seleccionar canción: ${song.title}`}
          >
            <img
              src={song.bannerImage}
              alt={`Portada de la canción ${song.title}`}
              className='w-16 h-16'
            />
            <div className='flex flex-row items-center w-full px-3'>
              <span
                className='text-sm @sm:text-base font-medium flex-1'
                aria-label={`Título de la canción: ${song.title}`}
              >
                {song.title}
              </span>

              {/* Mostrar el GIF o el botón Pause */}
              {isCurrentSong && isPlaying ? (
                hoveredSongId === song.id ? (
                  <div
                    className='rounded-full bg-green-500 p-2 cursor-pointer flex items-center justify-center
              hover:scale-105 transition-all duration-200 ease-out shadow-below'
                    onClick={handlePauseClick}
                    role='button'
                    aria-label='Pausar canción'
                  >
                    <Pause />
                  </div>
                ) : (
                  <img
                    src='/img/current-music.gif'
                    alt='Canción en reproducción'
                    className='w-4 h-4 mr-2'
                  />
                )
              ) : (
                <div
                  className='rounded-full bg-green-500 p-2 cursor-pointer flex items-center justify-center
          hover:scale-105 transition-all duration-200 ease-out shadow-below'
                  onClick={() => handleSongClick(song)}
                  role='button'
                  aria-label={`Reproducir canción: ${song.title}`}
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

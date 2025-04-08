import { useState } from "react";
import { usePlayerStore } from "../store/playerStore.js";
import FormatArtists from "./FormatArtists.jsx";
import { Play } from "src/icons/Play.jsx";
import { Pause } from "src/icons/Pause.jsx";
import { Heart } from "src/icons/Heart.jsx";
import { toggleFavoriteTrack } from "src/utils/helpers/localStorage.js";

export const TrackRow = ({ songItem }) => {
  const { id, bannerImage, artists, title, album, date, duration, isFavorite } =
    songItem;

  const [hoveredSongId, setHoveredSongId] = useState(null);

  const {
    setCurrentMusic,
    currentMusic,
    isPlaying,
    setIsPlaying,
    setProgress,
    audioRef,
    createFavoriteSong,
  } = usePlayerStore();

  const handleSongClick = (song) => {
    if (song.id !== currentMusic.song.id) {
      setCurrentMusic({
        ...currentMusic,
        song: song,
      });
      setIsPlaying(true);
      setProgress(0);
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

  const handleFavoriteTrack = (id) => {
    toggleFavoriteTrack(id);
    createFavoriteSong(id);
    if (id === currentMusic.song.id) {
      setCurrentMusic({
        ...currentMusic,
        song: {
          ...currentMusic.song,
          isFavorite: isFavorite,
        },
      });
    }
  };

  const isCurrentSong = id === currentMusic.song.id;

  return (
    <tr
      className='group hover:bg-gray-500/20 select-none'
      onMouseEnter={() => setHoveredSongId(id)}
      onMouseLeave={() => setHoveredSongId(null)}
    >
      <td className='whitespace-nowrap px-0 text-center py-2.5'>
        {/* Mostrar el GIF, el botón Pause o el ID */}
        {isCurrentSong && isPlaying ? (
          hoveredSongId === id ? (
            <figure
              className='fill-[#FFFFFF] flex items-center justify-center'
              onClick={handlePauseClick}
            >
              <Pause size='14' />
            </figure>
          ) : (
            <figure className='flex items-center justify-center'>
              <img
                src='/img/current-music.gif'
                alt='Playing'
                className='w-[14px] h-[14px]'
              />
            </figure>
          )
        ) : hoveredSongId === id ? (
          <figure
            className='fill-[#FFFFFF] flex items-center justify-center'
            onClick={() => handleSongClick(songItem)}
          >
            <Play size='14' />
          </figure>
        ) : (
          <span className='text-gray-300'>{id}</span>
        )}
      </td>
      <td className='whitespace-nowrap px-4 py-2.5 flex gap-3 items-center'>
        <div className='h-10 w-10'>
          <img
            src={bannerImage}
            alt={title}
            className='rounded object-cover h-full w-full shadow-[5px_0_30px_0px_rgba(0,0,0,0.3)]'
          />
        </div>
        <div className='leading-none'>
          <a
            href='#'
            className={`hover:underline text-base font-medium ${
              currentMusic.song.id === id
                ? "text-green-500"
                : "text-slate-50 group-hover:text-white"
            }`}
          >
            {title}
          </a>
          <div className='text-sm text-gray-300 group-hover:text-white'>
            <FormatArtists artists={artists} />
          </div>
        </div>
      </td>
      <td className='whitespace-nowrap px-4 py-2.5'>
        <a
          href='#'
          className='text-gray-300 group-hover:text-white hover:underline text-sm'
        >
          {album}
        </a>
      </td>
      <td className='whitespace-nowrap px-4 py-2.5'>
        <a
          href='#'
          className='text-gray-300 group-hover:text-white hover:underline text-sm'
        >
          {date}
        </a>
      </td>
      <td className='whitespace-nowrap text-gray-300'>
        <figure
          onClick={() => handleFavoriteTrack(id)}
          className={`heart cursor-pointer invisible group-hover:visible flex items-center justify-center w-auto translate-y-[1px] ${
            isFavorite
              ? "text-green-500 fill-green-500"
              : "text-gray-300 fill-none"
          }`}
          role='button'
        >
          <Heart />
        </figure>
      </td>
      <td className='whitespace-nowrap text-gray-300 px-4 py-2.5 text-center'>
        {duration}
      </td>
    </tr>
  );
};

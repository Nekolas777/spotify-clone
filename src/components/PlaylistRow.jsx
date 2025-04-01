import { useState } from "react";
import { usePlayerStore } from "../store/playerStore.js";
import FormatArtists from "./FormatArtists.jsx";
import { Play } from "src/icons/Play.jsx";
import { Pause } from "src/icons/Pause.jsx";

export const PlaylistRow = ({ songItem }) => {
  const { id, bannerImage, artists, title, album, date, duration } = songItem;

  const [hoveredSongId, setHoveredSongId] = useState(null);

  const {
    setCurrentMusic,
    currentMusic,
    isPlaying,
    setIsPlaying,
    setProgress,
    audioRef,
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

  const isCurrentSong = id === currentMusic.song.id;

  return (
    <tr
      className='group hover:bg-gray-500/20'
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
              <Pause size="14" />
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
            <Play size="14" />
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
              isPlaying & isCurrentSong ? "text-green-500" : "text-slate-50 group-hover:text-white"
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
      <td className='whitespace-nowrap text-gray-300 px-4 py-2.5 text-center'>
        {duration}
      </td>
    </tr>
  );
};

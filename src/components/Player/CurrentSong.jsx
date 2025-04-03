import { getFavoritesTracks, isFavoriteTrack, toggleFavoriteTrack } from "src/utils/helpers/localStorage";
import { Heart } from "../../icons/Heart";
import { usePlayerStore } from "../../store/playerStore";
import FormatArtists from "../FormatArtists";
import { useEffect, useState } from "react";

export const CurrentSong = () => {
  const { currentMusic, createFavoriteSong } = usePlayerStore();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteTrack = () => {
    toggleFavoriteTrack(currentMusic.song.id);
    createFavoriteSong(currentMusic.song.id);
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const hasFavoriteTrack = isFavoriteTrack(currentMusic.song.id);
    setIsFavorite(hasFavoriteTrack);
  }, [currentMusic, createFavoriteSong]);


  return (
    <div className='flex flex-row gap-4 items-center'>
      <img
        src={currentMusic?.song?.bannerImage}
        alt='banner_image'
        className='w-16 h-16 rounded-[4px]'
      />
      <div className='flex flex-col justify-center gap-1'>
        <h3 className='text-sm font-medium tracking-wide'>
          {currentMusic?.song?.title}
        </h3>
        <div className='text-slate-300 text-xs'>
          <FormatArtists artists={currentMusic?.song?.artists} />
        </div>
      </div>
      <figure
        onClick={handleFavoriteTrack}
        className={`cursor-pointer ${
          isFavorite
            ? "text-green-500 fill-green-500"
            : "text-gray-300 fill-none"
        }`}
      >
        <Heart />
      </figure>
    </div>
  );
};

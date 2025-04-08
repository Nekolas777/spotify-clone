import { getFavoritesTracks, isFavoriteTrack, toggleFavoriteTrack } from "src/utils/helpers/localStorage";
import { Heart } from "../../icons/Heart";
import { usePlayerStore } from "../../store/playerStore";
import FormatArtists from "../FormatArtists";
import { useEffect, useState } from "react";

export const CurrentSong = () => {
  const { currentMusic, createFavoriteSong, setRefreshTable } = usePlayerStore();

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteTrack = () => {
    toggleFavoriteTrack(currentMusic.song.id);
    createFavoriteSong(currentMusic.song.id);
    setIsFavorite(!isFavorite);
    setRefreshTable((prev) => prev + 1);
  };

  useEffect(() => {
    const hasFavoriteTrack = isFavoriteTrack(currentMusic.song.id);
    setIsFavorite(hasFavoriteTrack);
  }, [currentMusic, createFavoriteSong]);


  return (
    <div className='flex flex-row gap-4 items-center max-w-fit md:max-w-[265px] w-full truncate'>
      <img
        src={currentMusic?.song?.bannerImage}
        alt='banner_image'
        className='max-w-14 xs:max-w-16 max-h-14 xs:max-h-16 rounded-[4px]'
      />
      <div className='hidden xs:flex flex-col justify-center gap-1'>
        <h3 className='text-sm font-medium tracking-wide'>
          {currentMusic?.song?.title}
        </h3>
        <div className='text-slate-300 text-xs '>
          <FormatArtists artists={currentMusic?.song?.artists} />
        </div>
      </div>
      <figure
        onClick={handleFavoriteTrack}
        className={`hidden md:block cursor-pointer ${
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

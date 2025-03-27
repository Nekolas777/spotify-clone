import { useEffect } from "react";
import { Heart } from "../../icons/Heart";
import { usePlayerStore } from "../../store/playerStore";

console.log('ola');

export const CurrentSong = () => {

  const { currentMusic } = usePlayerStore();

  useEffect(() => {
    console.log('ola');
  }, []);

  return (
    <div className="flex flex-row gap-4 items-center">
      <img
        src={currentMusic?.song?.bannerImage}
        alt="banner_image"
        className="w-16 h-16 rounded-[4px]"
      />
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-sm font-medium tracking-wide">{currentMusic?.song?.title}</h3>
        <span className="text-slate-300 text-xs">{currentMusic?.song?.album}</span>
      </div>
      <Heart/>
    </div>
  );
};

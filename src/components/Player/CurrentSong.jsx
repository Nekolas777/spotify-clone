import { Heart } from "../../icons/Heart";

export const CurrentSong = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <img
        src="/img/viceversa-example.jpg"
        alt="banner_image"
        className="w-16 h-16 rounded-[4px]"
      />
      <div className="flex flex-col justify-center gap-1">
        <h3 className="text-sm font-medium tracking-wide">Why do I?</h3>
        <span className="text-slate-300 text-xs">Aero Chord</span>
      </div>
      <Heart/>
    </div>
  );
};

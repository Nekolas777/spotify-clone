import { CurrentSong } from "./CurrentSong";
import { PlayerControl } from "./PlayerControl";
import { PlayerSettings } from "./PlayerSettings";

export const Player = () => {
  return (
    <div className="h-full flex flex-row justify-between items-center relative gap-4 sm:gap-6 w-full">
      <CurrentSong />

      <PlayerControl />
      
      <PlayerSettings />
    </div>
  );
};

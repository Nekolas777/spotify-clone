import { CurrentSong } from "./CurrentSong";
import { PlayerControl } from "./PlayerControl";
import { PlayerSettings } from "./PlayerSettings";

export const Player = () => {
  return (
    <div className="flex flex-row justify-between h-full items-center relative gap-4 sm:gap-6">
      <CurrentSong />

      <PlayerControl />
      
      <PlayerSettings />
    </div>
  );
};

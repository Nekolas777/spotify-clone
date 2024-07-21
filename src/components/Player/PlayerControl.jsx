import { BackwardStep } from "../../icons/BackwardStep";
import { ForwardStep } from "../../icons/ForwardStep";
import { Pause } from "../../icons/Pause";
import { Repeat } from "../../icons/Repeat";
import { Shuffle } from "../../icons/Shuffle";
import { SongControl } from "./SongControl";

export const PlayerControl = () => {
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex flex-row gap-6 items-center">
        <Shuffle size={4}/>
        <BackwardStep/>
        <button className="p-2 bg-white rounded-full">
          <Pause/>
        </button>
        <ForwardStep/>
        <Repeat/>
      </div>
      <div>
        <SongControl/>
      </div>
    </div>
  );
};

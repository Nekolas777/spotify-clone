import { Slider } from "@radix-ui/react-slider";
import { useRef } from "react";

export const SongControl = () => {
  return (
    <div className="flex flex-row gap-3">
      <h1>currentTime</h1>

      <Slider
        value={0}
        max={0}
        min={0}
        className="w-[400px] border"
      />

      <h1>Duration</h1>
    </div>
  );
};

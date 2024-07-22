import * as Slider from '@radix-ui/react-slider';
import { VolumeUp } from "../../icons/VolumeUp";

export const VolumeControl = () => {
  return (
    <div className="flex flex-row items-center gap-2">
      <VolumeUp />
      <div className="block">
        <Slider.Root
          className="w-[100px] relative flex items-center"
          defaultValue={[0]}
          max={100}
          min={0}
          step={1}
        >
          <Slider.Track className="bg-gray-600 relative flex-grow h-1 rounded-full">
            <Slider.Range className="absolute bg-green-500 h-full rounded-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-3 h-3 bg-white rounded-full shadow-md" />
        </Slider.Root>
      </div>
    </div>
  );
};

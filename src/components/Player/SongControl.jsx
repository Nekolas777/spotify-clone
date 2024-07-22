import * as Slider from '@radix-ui/react-slider';

export const SongControl = () => {
  return (
    <div className="flex flex-row gap-3 items-center bg-black text-white">
      <h1 className="text-sm text-[#b3b3b3]">0:00</h1>

      <Slider.Root className="w-[550px] relative flex items-center" defaultValue={[0]} max={100} min={0} step={1}>
        <Slider.Track className="bg-gray-600 relative flex-grow h-1 rounded-full">
          <Slider.Range className="absolute bg-green-500 h-full rounded-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-3 h-3 bg-white rounded-full shadow-md" />
      </Slider.Root>

      <h1 className="text-sm text-[#b3b3b3]">3:45</h1>
    </div>
  );
};
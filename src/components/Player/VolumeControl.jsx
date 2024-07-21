import { Slider } from "@radix-ui/react-slider"
import { VolumeUp } from "../../icons/VolumeUp"

export const VolumeControl = () => {
  return (
    <div className="flex flex-row gap-2">
      <VolumeUp />
      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[1000]}
        className="w-[105px] border"
      />
    </div>
  )
}

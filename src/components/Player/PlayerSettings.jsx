import { ConnectDevice } from "../../icons/ConnectDevice"
import { CurrentSongView } from "../../icons/CurrentSongView"
import { Expand } from "../../icons/Expand"
import { Queue } from "../../icons/Queue"
import { VolumeControl } from "./VolumeControl"

export const PlayerSettings = () => {
  return (
    <div className="flex flex-row gap-4 w-fit">
      <figure className="hidden sm:flex">
        <CurrentSongView />
      </figure>
      <figure className="hidden sm:flex">
        <Queue />
      </figure>
      <figure className="hidden sm:flex">
        <ConnectDevice />
      </figure>
      <VolumeControl />
      <figure className="hidden sm:flex">
        <Expand />
      </figure>
    </div>
  )
}

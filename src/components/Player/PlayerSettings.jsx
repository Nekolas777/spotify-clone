import { ConnectDevice } from "../../icons/ConnectDevice"
import { CurrentSongView } from "../../icons/CurrentSongView"
import { Expand } from "../../icons/Expand"
import { Queue } from "../../icons/Queue"
import { VolumeControl } from "./VolumeControl"

export const PlayerSettings = () => {
  return (
    <div className="flex flex-row gap-4">
      <CurrentSongView />
      <Queue />
      <ConnectDevice />
      <VolumeControl />
      <Expand/>
    </div>
  )
}

import * as Slider from "@radix-ui/react-slider";
import { VolumeUp } from "../../icons/VolumeUp";
import { usePlayerStore } from "../../store/playerStore";
import { VolumeMute } from "../../icons/VolumeMute";
import { VolumeDown } from "../../icons/VolumeDown";
import { useState } from "react";

export const VolumeControl = () => {
  const { audioRef, volume, setVolume } = usePlayerStore();
  // creamos un estado local para almacenar el volumen anterior y luego recuperarlo :p
  const [previousVolume, setPreviousVolume] = useState(100);

  const handleVolumeChange = (value) => {
    // actualizamos el volumen del audioRef
    setVolume(value[0]);

    if (audioRef?.current) {
      audioRef.current.volume = value[0] / 100;
    }
  };

  const handleVolumeClick = () => {
    if (!audioRef?.current) return;

    if (volume === 0) {
      audioRef.current.volume = previousVolume / 100;
      setVolume(previousVolume);
    } else {
      setPreviousVolume(volume);
      audioRef.current.volume = 0;
      setVolume(0);
    }
  };

  return (
    <div className='flex flex-row items-center gap-2 w-full'>
      <figure
        onClick={handleVolumeClick}
        tabIndex={0}
        role='button'
        aria-label={volume === 0 ? "Silenciar volumen" : "Activar volumen"}
      >
        {volume === 0 ? (
          <VolumeMute />
        ) : volume < 50 ? (
          <VolumeDown />
        ) : (
          <VolumeUp />
        )}
      </figure>
      <div className='block w-[50px] xs:w-[100px]'>
        <Slider.Root
          className='relative flex items-center'
          defaultValue={[100]}
          value={[volume]}
          max={100}
          min={0}
          step={1}
          onValueChange={handleVolumeChange}
          aria-label='Control deslizante de volumen'
        >
          <Slider.Track className='bg-gray-600 relative flex-grow h-1 rounded-full'>
            <Slider.Range className='absolute bg-green-500 h-full rounded-full' />
          </Slider.Track>
          <Slider.Thumb
            className='block w-3 h-3 bg-white rounded-full shadow-md'
            aria-label='Control de volumen'
          />
        </Slider.Root>
      </div>
    </div>
  );
};

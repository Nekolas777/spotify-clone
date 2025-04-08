import { TimeIcon } from "src/icons/TimeIcon";
import { TrackRow } from "./TrackRow";
import { usePlayerStore } from "src/store/playerStore";
import {
  getFavoritesTracks,
  updateSongsWithFavorites,
} from "src/utils/helpers/localStorage";
import { useEffect, useState } from "react";
import { TableSkeleton } from "./TableSkeleton";
import { songs } from "src/data/songs";

export const MusicsTable = ({ type = "all" }) => {
  // obtenems la lista de canciones del store
  const { tracks, setTracks, refreshTable } = usePlayerStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    /* console.log("refreshTable", refreshTable); */
    setIsLoading(true);
    switch (type) {
      case "all":
        const storedTracks = updateSongsWithFavorites();
        setTracks(storedTracks);
        break;
      case "favorites":
        const storedFavorites = getFavoritesTracks();
        setTracks(storedFavorites);
        break;
    }
    setIsLoading(false);
  }, [type, refreshTable]);

  if (isLoading) {
    return (
      <TableSkeleton rows={songs.length} />
    );
  }

  return (
    <div className='px-5 pb-2 contain-inline-size min-w-auto overflow-x-auto relative'>
      {tracks.length > 0 ? (
        <table className='table-auto text-left min-w-full'>
          <thead className='border-b-[1px] border-gray-300/30 z-50'>
            <tr className='text-gray-300'>
              <th className='font-normal px-2 py-2 text-center whitespace-nowrap'>
                #
              </th>
              <th className='font-normal px-4 py-2 whitespace-nowrap'>
                Título
              </th>
              <th className='font-normal px-4 py-2 whitespace-nowrap'>Álbum</th>
              <th className='font-normal px-4 py-2 whitespace-nowrap'>
                Fecha en la que se añadio
              </th>
              <th className='font-normal px-0 py-2 whitespace-nowrap w-2'></th>
              <th className='font-normal px-4 py-2 whitespace-nowrap flex justify-center'>
                <TimeIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            {tracks?.map((song, index) => (
              <TrackRow songItem={song} index={index} key={song.title} />
            ))}
          </tbody>
        </table>
      ) : (
        <div className='flex flex-col gap-4 items-center justify-center h-full pb-10'>
          <img
            src='/img/no-favorites.png'
            alt='No songs found'
            className='h-18 w-22'
          />
          <div className='flex flex-col gap-2 items-center justify-center'>
            <p className='text-green-500 text-xl font-semibold'>
              No tienes canciones favoritas
            </p>
            <p className='text-slate-50 text-base'>
              Agrega canciones a tu lista de favoritos para verlas aquí.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

import { songs } from "src/data/songs";
import { TimeIcon } from "src/icons/TimeIcon";
import { PlaylistRow } from "./PlaylistRow";

export const MusicsTable = () => {
  return (
    <div className='px-5'>
      <table className='table-auto text-left min-w-full'>
        <thead className='border-b-[1px] border-gray-300/30 z-50'>
          <tr className='text-gray-300'>
            <th className='font-normal px-2 py-2 text-center whitespace-nowrap'>
              #
            </th>
            <th className='font-normal px-4 py-2 whitespace-nowrap'>Título</th>
            <th className='font-normal px-4 py-2 whitespace-nowrap'>Álbum</th>
            <th className='font-normal px-4 py-2 whitespace-nowrap'>
              Fecha en la que se añadio
            </th>
            <th className='font-normal px-4 py-2 whitespace-nowrap flex justify-center'>
              <TimeIcon name='carbon:time' />
            </th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <PlaylistRow songItem={song} key={song.title} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

import { Play } from "../../icons/Play.jsx";
import { usePlayerStore } from "../../store/playerStore.js";

export const RecentSongs = ({ songs = [] }) => {
  const { setCurrentMusic, currentMusic } = usePlayerStore();

  const handleSongClick = (song) => {
    setCurrentMusic({
      ...currentMusic,
      song: song
    })
  }

  return (
    <div className="songs-cards">
      {songs?.slice(0, 8).map((song) => {
        return (
          <div
            key={song.id}
            className="bg-[hsla(0,0%,100%,.07)] flex flex-row cursor-pointer
          hover:bg-[hsla(0,0%,100%,.2)] transition-all duration-300 ease"
            data-color={song.color?.accent}
          >
            <img src={song.bannerImage} className="w-16 h-16" />
            <div className="flex flex-row items-center w-full px-3">
              <span className="text-base font-medium flex-1">{song.title}</span>
              <div
                className="rounded-full bg-green-500 p-2 cursor-pointer flex items-center justify-center
          hover:scale-105 transition-all duration-200 ease-out shadow-below"
                onClick={() => handleSongClick(song)}
              >
                <Play />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

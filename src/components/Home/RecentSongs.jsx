import {Play} from "../../icons/Play.jsx";

export const RecentSongs = ({songs = []}) => {

  return (
    <div class="songs-cards">
      {songs?.slice(0, 8).map((song) => {
        return (
          <div
            class="bg-[hsla(0,0%,100%,.07)] flex flex-row cursor-pointer
          hover:bg-[hsla(0,0%,100%,.2)] transition-all duration-300 ease"
            data-color={song.color?.accent}
          >
            <img src={song.bannerImage} class="w-16 h-16" />
            <div class="flex flex-row items-center w-full px-3">
              <span class="text-base font-medium flex-1">{song.title}</span>
              <div
                class="rounded-full bg-green-500 p-2 cursor-pointer flex items-center justify-center
          hover:scale-105 transition-all duration-200 ease-out shadow-below"
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
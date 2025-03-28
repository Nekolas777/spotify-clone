import { create } from "zustand";
import { playlists } from "../data/playlists";
import { songs } from "../data/songs";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  progress: 0,
  currentMusic: {
    playlist: playlists[0],
    song: songs[0],
  },
  volume: 1,
  setProgress: (progress) => set({ progress }),
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

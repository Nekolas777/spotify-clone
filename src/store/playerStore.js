import { create } from "zustand";
import { playlists } from "../data/playlists";
import { songs } from "../data/songs";
import React from "react";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  progress: 0,
  currentMusic: {
    playlist: playlists[0],
    song: songs[0],
  },
  volume: 100,
  audioRef: React.createRef(), // creamos una referencia de audio por defecto para evitar al setear una referencia vacia
  setAudioRef: (ref) => set({ audioRef: ref }),
  setProgress: (progress) => set({ progress }),
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));

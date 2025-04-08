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
  tracks: [],
  volume: 100,
  audioRef: React.createRef(), // creamos una referencia de audio por defecto para evitar al setear una referencia vacia
  refreshTable: 0, // estado para forzar la actualizacion de la tabla al agregar una cancion a favoritos
  setAudioRef: (ref) => set({ audioRef: ref }),
  setProgress: (progress) => set({ progress }),
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setTracks: (updatedSongs) => set({ tracks: updatedSongs }),
  setRefreshTable: (refresh) => set({ refreshTable: refresh }),
  // method to toggle the favorite song
  createFavoriteSong: (songId) =>
    set((state) => {
      const updatedTracks = state.tracks.map((song) =>
        song.id === songId ? { ...song, isFavorite: !song.isFavorite } : song
      );
      return { tracks: updatedTracks };
    }),
}));

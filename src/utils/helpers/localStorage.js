import { songs } from "src/data/songs";

export const toggleFavoriteTrack = (trackId) => {
  const existingTracks = JSON.parse(localStorage.getItem("favTracks")) || [];

  // verificamos si ya existe pom, manejamos en ambos casos para controlar el toggle de favoritos
  if (existingTracks.includes(trackId)) {
    const updatedTracks = existingTracks.filter((id) => id !== trackId);
    localStorage.setItem("favTracks", JSON.stringify(updatedTracks));
    return false;
  } else {
    existingTracks.push(trackId);
    localStorage.setItem("favTracks", JSON.stringify(existingTracks));
    return true;
  }
}

export const getFavoritesTracks = () => {
  const tracksIds = JSON.parse(localStorage.getItem("favTracks")) || [];

  songs.forEach((song) => {
    song.isFavorite = tracksIds.includes(song.id);
  });

  // Retornar las canciones favoritas9
  return songs.filter((song) => song.isFavorite);
};

export const updateSongsWithFavorites = () => {
  const tracksIds = JSON.parse(localStorage.getItem("favTracks")) || [];

  songs.forEach((song) => {
    song.isFavorite = tracksIds.includes(song.id);
  });

  return songs;
};

export const isFavoriteTrack = (trackId) => {
  const existingTracks = JSON.parse(localStorage.getItem("favTracks")) || [];

  return existingTracks.includes(trackId);
}
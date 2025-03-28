export const formatTime = (time) => {
  if (!time || isNaN(time)) return "0:00"; // Verificar si el tiempo es inválido
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
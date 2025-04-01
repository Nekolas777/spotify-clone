import React from "react";

const FormatArtists = ({ artists }) => {
  return (
    <>
      {artists.map((artist, index) => (
        <React.Fragment key={index}>
          <a href='#' className='hover:underline'>
            {artist}
          </a>
          <span className='text-gray-300'>
            {index === artists.length - 1 ? " " : ", "}
          </span>
        </React.Fragment>
      ))}
    </>
  );
};

export default FormatArtists;

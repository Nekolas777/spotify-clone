import React from "react";

const FormatArtists = ({ artists }) => {
  return (
    <>
      {artists.map((artist, index) => (
        <React.Fragment key={index}>
          <p className='inline-block hover:underline cursor-pointer'>
            {artist}
          </p>
          <span className='text-gray-300'>
            {index === artists.length - 1 ? " " : ", "}
          </span>
        </React.Fragment>
      ))}
    </>
  );
};

export default FormatArtists;

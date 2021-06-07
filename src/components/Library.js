import React from "react";

import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  currentSongs,
  setcurrentSongs,
  isPlaying,
  audioRef,
  setSongs,
  libraryStatus
}) => {
  return (
    <div className={`library ${libraryStatus ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            songs={songs}
            setcurrentSongs={setcurrentSongs}
            currentSongs={currentSongs}
            id={song.id}
            key={song.id}
            isPlaying={isPlaying}
            audioRef={audioRef}
            setSongs={setSongs}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;

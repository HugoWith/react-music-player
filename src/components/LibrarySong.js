import React from "react";



const LibrarySong = ({
  song,
  setcurrentSongs,
  currentSongs,
  id,
  songs,
  audioRef,
  isPlaying,
  setSongs
}) => {

  const selectSongHandler = async () => {
    setcurrentSongs(song)
    const newSong = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true
        }
      } else {
        return {
          ...song,
          active: false
        }
      }
    })
    await setSongs(newSong)
    if (isPlaying) audioRef.current.play()


  }
  return (
    <div onClick={selectSongHandler} className={`library-song ${song.id === currentSongs.id ? "selected" : ""}`} >
      <img src={song.cover} alt="" />
      <div className="song-description">
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default LibrarySong;

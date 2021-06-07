import React from 'react'


const Song = ({ currentSongs, isPlaying }) => {
    return (
        <div className="song-container">
            <img className={isPlaying ? "rotateSong" : ""} src={currentSongs.cover} alt="" />
            <h2>{currentSongs.name}</h2>
            <h3>{currentSongs.artist}</h3>
        </div>
    )
}

export default Song
import React, { useState, useRef } from 'react'

import './scss/app.scss'
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from "./components/Nav";

import data from './data'

function App() {

  const [songs, setSongs] = useState(data())
  const [currentSongs, setcurrentSongs] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [songInfos, setSongInfos] = useState({
    duration: 0,
    currentTime: 0,
    animationPercentage: 0
  })

  const endedHandler = async () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSongs.id);
    await setcurrentSongs(songs[(currentIndex + 1) % songs.length])
    audioRef.current.play()
  }

  const timeHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration
    const animationPercentage = (Math.round(current) / Math.round(duration)) * 100
    setSongInfos({ ...songInfos, duration, currentTime: current, animationPercentage })
  }

  return (
    <div className={`App ${libraryStatus ? "library-active" : ""}`}>
      <Nav setLibraryStatus={setLibraryStatus} libraryStatus={libraryStatus} />
      <Song currentSongs={currentSongs} isPlaying={isPlaying} />
      <Player setcurrentSongs={setcurrentSongs} currentSongs={currentSongs} isPlaying={isPlaying} setIsPlaying={setIsPlaying} audioRef={audioRef} songInfos={songInfos} setSongInfos={setSongInfos} songs={songs} />
      <Library
        songs={songs}
        setcurrentSongs={setcurrentSongs}
        currentSongs={currentSongs}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio ref={audioRef} src={currentSongs.audio} onTimeUpdate={timeHandler} onLoadedMetadata={timeHandler} onEnded={endedHandler}></audio>
    </div>
  );
}

export default App;

import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons'


const Player = ({ isPlaying, setIsPlaying, audioRef, setSongInfos, songInfos, songs, currentSongs, setcurrentSongs }) => {



    const playHandler = () => {
        if (isPlaying) {
            setIsPlaying(!isPlaying)
            audioRef.current.pause()
        } else {
            audioRef.current.play()
            setIsPlaying(!isPlaying)
        }
    }

    const getTime = (time) => {

        return (
            Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
        )
    }

    const rangeHandler = (e) => {
        console.log(audioRef)
        audioRef.current.currentTime = e.target.value
        setSongInfos({ ...songInfos, currentTime: e.target.value })
    }

    const skipTrackHandler = async (direction) => {
        const currentIndex = songs.findIndex((song) => song.id === currentSongs.id);
        if (direction === "back") {
            currentIndex === 0 ? await setcurrentSongs(songs[songs.length - 1]) : await setcurrentSongs(songs[currentIndex - 1])

        } else {
            await setcurrentSongs(songs[(currentIndex + 1) % songs.length])
        }
        if (isPlaying) audioRef.current.play()


    };

    //STYLE
    const trackAnim = {
        transform: `translateX(${songInfos.animationPercentage}%)`,
    };

    const gradientInput = {
        background: `linear-gradient(to right, ${currentSongs.color[0]},${currentSongs.color[1]})`
    }


    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfos.currentTime)}</p>
                <div
                    style={gradientInput} className="track">
                    <input min={0} max={songInfos.duration || 0} value={songInfos.currentTime} type="range" onChange={rangeHandler} />
                    <div style={trackAnim} className="animate-track"></div>
                </div>
                <p>{songInfos.duration ? getTime(songInfos.duration) : ""}</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon className="skipBack" size="2x" icon={faAngleLeft} onClick={() => skipTrackHandler("back")} />
                <FontAwesomeIcon onClick={playHandler} className="play" size="2x" icon={isPlaying ? faPause : faPlay} />
                <FontAwesomeIcon className="skipForward" size="2x" icon={faAngleRight} onClick={() => skipTrackHandler("forward")} />
            </div>

        </div>
    )
}

export default Player
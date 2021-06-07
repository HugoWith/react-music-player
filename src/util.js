const playAudio = async (isPlaying, audioRef) => {
    if (isPlaying) {
        await audioRef.current.play()
    }
}

export default playAudio
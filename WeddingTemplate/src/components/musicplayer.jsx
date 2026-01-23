import React, {useState, useRef} from "react";

import {FaPlay, FaPause} from "react-icons/fa";
import '/src/css/musicplayer.css';

const MusicPlayer = ({photo}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if(isPlaying){
            audioRef.current.pause();
        }else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return(
        <div className="player-wrapper">
            <audio ref={audioRef} src={"/music/song1.mp3"} loop/>
            <div className="player-container">
                <div className="player-avatar">
                    <img src={photo} alt="Pareja" />
                </div>
                <div className="player-controls">
            <h2>Bad - wave to earth</h2>
          
          <button className="control-btn play-pause" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer;

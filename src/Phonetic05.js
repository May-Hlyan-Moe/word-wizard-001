import React from "react";
import "./Dictionary01.css";
//import ReactAudioPlayer from 'react-audio-player';

export default function Phonetic05(props) {
    return (
        <div className="phonetics">
            <a href={props.phonetic.audio} target="black">
                Listen
            </a>
            
            <span className="text">
                {props.phonetic.text}
            </span>
            
        </div>
    )
} 
import React from "react";

export default function Phonetic05 (props) {
    return (
        <div className="phonetics">
            <a href={props.phonetic.audio} target="black">
                Listen
            </a>
            <br />
            {props.phonetic.text}
        </div>
    )
} 
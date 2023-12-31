import React from "react";
import "./Dictionary01.css";

export default function Synonyms04 (props) {
    if (props.synonyms) {
        return (
            <ul className="synonyms">
                {props.synonyms.map(function(synonym, index) {
                    return( 
                    <li key={index}>
                        {synonym}
                    </li>
                    )
                })}
            </ul>
        )
    } else {
        return null;
    }
}
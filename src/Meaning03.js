import React from "react";
import "./Synonyms04";
import Synonyms04 from "./Synonyms04";
import "./Dictionary01.css";

export default function Meaning03 (props) {
    console.log(props.meaning);
    return (
        <div className="Meaning">
            <h3>
                {props.meaning.partOfSpeech}
            </h3>
            {props.meaning.definitions.map(function(definition, index) {
                return (
                    <div key={index}>
                        <strong>Definition:</strong>
                        {definition.definition}
                        <br />
                        <strong>Example:</strong>
                        <em>{definition.example}</em>
                        <br />
                        <strong>Synonym:</strong>
                        <Synonyms04 synonyms={definition.synonyms} />
                        <hr />
                    </div>
                )
            })}
        </div>
    )
} 
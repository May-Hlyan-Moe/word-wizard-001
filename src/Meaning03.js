import React from "react";
import "./Synonyms04";
import Synonyms04 from "./Synonyms04";
import "./Dictionary01.css";

export default function Meaning03(props) {
    return (
        <div className="Meaning">
            <section>
                <h3>
                    {props.meaning.partOfSpeech}
                </h3>
                <div className="definition">
                    {props.meaning.definition}
                </div>
                <div className="example">
                    {props.meaning.example}
                </div>
                <Synonyms04 synonyms={props.meaning.synonyms} />
            </section>
        </div>
    )
} 
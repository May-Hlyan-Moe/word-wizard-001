import React from "react";
import Meaning03 from "./Meaning03";
import "./Phonetic05";
import Phonetic05 from "./Phonetic05";
import "./Dictionary01.css";

export default function Result02(props) {
    console.log(props.results);
    if (props.results) {
        return (
            <div className="Results02">
                <section>
                    <h2>{props.results.word}</h2>
                    {props.results.phonetics.map(function (phonetic, index) {
                        return (
                            <div key={index} >
                                <Phonetic05 phonetic={phonetic} />
                            </div>

                        )
                    })}
                </section>
                <section>
                {props.results.meanings.map(function (meaning, index) {
                    return (
                        <div key={index}>
                            <Meaning03 meaning={meaning} />
                        </div>
                    );
                })}
                </section>
            </div>
        );
    } else {
        return null;
    }
}
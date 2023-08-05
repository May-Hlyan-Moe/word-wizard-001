import React from "react";
import Meaning03 from "./Meaning03";

export default function Result02 (props) {
    console.log(props.results);
    if (props.results) {
        return (
        <div className="Results02">
            <h2>{props.results.word}</h2>
            {props.results.meanings.map(function (meaning, index) {
                return (
                    <div key={index}>
                        <Meaning03 meaning={meaning} />
                    </div>
                );
            })}
        </div>
    );
    } else {
        return {};
    }
}
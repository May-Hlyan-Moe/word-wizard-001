import React, { useState } from "react";
import "./Dictionary01.css";
import axios from "axios";
import Result02 from "./Result02";

export default function Dictionary01() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState("");

    //function3
    function handleReponse (response) {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    //function01
    function search (event) {
        event.preventDefault();

        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`
        //let apiUrl= `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e8b0a10cf3eacat9055e9544c4bb244o` ;
        axios.get(apiUrl).then(handleReponse);
    }

    //function02
    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary01 container">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} />
            </form>
            <Result02 results={results} />
        </div>
    );
}
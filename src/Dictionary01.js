import React, { useState } from "react";
import "./Dictionary01.css";
import axios from "axios";
import Result02 from "./Result02";


export default function Dictionary01(props) {
    let [keyword, setKeyword] = useState(props.defaultkeyword);
    let [results, setResults] = useState("");
    let [loaded, setLoaded] = useState(false);

    //function3
    function handleReponse(response) {
        console.log(response.data[0].meanings[0].definitions[0].definition);
        setResults(response.data[0]);
    }

    function search () {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        //let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`
        //let apiUrl= `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e8b0a10cf3eacat9055e9544c4bb244o` ;
        axios.get(apiUrl).then(handleReponse);
    }

    //function01
    function handleSubmit(event) {
        event.preventDefault();
        search();
        
    }

    //function02
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (

        <div className="Dictionary01 container">
            <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" onChange={handleKeywordChange} />
                </form>
            </section>

            <Result02 results={results} />
        </div>
    );
    } else {
        load();
        return "loading";
    }
    
}
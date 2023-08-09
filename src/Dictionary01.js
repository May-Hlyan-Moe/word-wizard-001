import React, { useState } from "react";
import "./Dictionary01.css";
import axios from "axios";
import Result02 from "./Result02";
import Photos06 from "./Photos06";


export default function Dictionary01(props) {
    let [keyword, setKeyword] = useState(props.defaultkeyword);
    let [results, setResults] = useState("");
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState("");

    //function4
    function handleReponse(response) {
        setResults(response.data);
    }

    //function6
    function handleImageResponse(response) {
        setPhotos(response.data.photos);
    }

    //function2
    function search() {
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e8b0a10cf3eacat9055e9544c4bb244o`;
        axios.get(apiUrl).then(handleReponse);

        let pexelsApiKey =
            "JDmrUUOjmcZdUyK6hY4SBohaa3h7PCzfRtJZLrW2S6x1RJ53bP2Q5EjO";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        let headers = { Authorization: `${pexelsApiKey}` };
        axios.get(pexelsApiUrl, { headers: headers }).then(handleImageResponse);


    }

    //function01
    function handleSubmit(event) {
        event.preventDefault();
        search();

    }


    //function03
    function handleKeywordChange(event) {
        setKeyword(event.target.value);
    }

    //function5
    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (

            <div className="Dictionary01 container">
                <section>
                    <h2>Are you looking for a specific word ?</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultkeyword} autoFocus={true} />
                    </form>
                </section>
                <Result02 results={results} />
                <Photos06 photos={photos} />
            </div>
        );
    } else {
        load();
        return "loading";
    }

}
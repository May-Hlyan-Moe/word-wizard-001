import React, { useState } from "react";
import "./Dictionary01.css";
import axios from "axios";

export default function Dictionary01() {
    let [keyword, setKeyword] = useState("");

    function handleReponse (response) {
        console.log(response.data.word);
    }

    function search (event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);

        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=e8b0a10cf3eacat9055e9544c4bb244o`;
        axios.get(apiUrl).then(handleReponse);
        console.log(apiUrl);
    }

    function handleKeywordChange (event) {
        setKeyword(event.target.value);
    }
    return (
        <div className="Dictionary01 container">
            <form onSubmit={search}>
                <input type="search" onChange={handleKeywordChange} autoFocus={true} />
            </form>
        </div>
    );
}
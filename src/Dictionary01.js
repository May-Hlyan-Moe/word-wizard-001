import React, { useState } from "react";
import "./Dictionary01.css";

export default function Dictionary01() {
    let [keyword, setKeyword] = useState("");
    function search (event) {
        event.preventDefault();
        alert(`Searching for ${keyword}`);
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
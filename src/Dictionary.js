import React, { useState } from "react";
import axios from "axios";

export default function Dictionary(){
    const [keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response);
    }

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);

        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    return(
        <div className="Dictionary">
            <form onSubmit={search}>
                <div>
                  <input
                    type="search"
                    placeholder="Type a word..."
                    autoFocus={true}
                    onChange={handleKeywordChange} />
                </div>
              </form>
        </div>
    );
}
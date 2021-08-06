import React, { useState } from "react";

export default function Dictionary(){
    const [keyword, setKeyword] = useState("");

    function search(event){
        event.preventDefault();
        alert(`Searching for ${keyword} definition`);
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
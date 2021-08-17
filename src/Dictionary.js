import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props){
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        setResults(response.data[0]);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function search(){
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleKeywordChange(event){
        setKeyword(event.target.value);
    }

    function load(){
      setLoaded(true);
      search();
    }

    if(loaded){
        return(
          <div className="Dictionary">
              <section>
                  <form onSubmit={handleSubmit}>
                      <div>
                        <input
                        type="search"
                        placeholder="Type a word..."
                        autoFocus={true}
                        onChange={handleKeywordChange} />
                      </div>
                  </form>
                  <div className="hint">suggested words: sunset, wine, yoga</div>
              </section>
              <Results results={results}/>
          </div>
        );
    } else{
      load();
      return "Loading";
    }
}
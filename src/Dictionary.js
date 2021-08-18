import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props){
    const [keyword, setKeyword] = useState(props.defaultKeyword);
    const [results, setResults] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        setResults(response.data[0]);
    }

    function handlePexelsResponse(response){
      setPhotos(response.data.photos);
    }

    function handleSubmit(event){
        event.preventDefault();
        search();
    }

    function search(){
        let apiUrl =`https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
        axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "563492ad6f9170000100000165d0fc2727874c10bd60f71f3068bbd5";
        let pexelsUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
        let headers = {"Authorization" : `Bearer ${pexelsApiKey}`}
        axios.get(pexelsUrl, { headers: headers}).then(handlePexelsResponse);
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
                <p>What would you like to look up?</p>
                  <form onSubmit={handleSubmit}>
                      <div>
                        <input
                        type="search"
                        placeholder="Type a word..."
                        onChange={handleKeywordChange}/>
                      </div>
                  </form>
                  <div className="hint">suggested words: sunset, wine, yoga</div>
              </section>
              <Photos photos={photos} keyword={props.defaultKeyword}/>
              <Results results={results}/>
          </div>
        );
    } else{
      load();
      return "Loading...";
    }
}
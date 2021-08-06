import React from "react";

export default function Dictionary(){
    return(
        <div className="Dictionary">
            <form>
                <div>
                  <input
                    type="search"
                    placeholder="Type a word..."
                    autoFocus="on"                   
                  />
                </div>
              </form>
        </div>
    );
}
import React from "react";

export default function Audio(props){
    console.log(props.audio);
if(props.audio){
    return(
        <div>
            <a href={props.audio} target="_blank" rel="noreferrer">Listen</a>
        </div>
    );
 } else{
     return null;
 }
}

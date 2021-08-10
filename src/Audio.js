import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Audio(props){
    console.log(props.audio);
if(props.audio){
    return(
        <div>
            <ReactAudioPlayer src={props.audio} controls className="audio"/>
        </div>
    );
 } else{
     return null;
 }
}

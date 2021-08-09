import React from "react";
import Audio from "./Audio.js"

export default function Phonetic(props){
    console.log(props.phonetic);
    return (
    <div className="Phonetic row">
        <div className="col-1"><Audio audio={props.phonetic.audio}/></div>
        <div className="col">{props.phonetic.text}</div>
    </div>
    );
}
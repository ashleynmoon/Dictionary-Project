import React from "react";
import Audio from "./Audio.js"

export default function Phonetic(props){
    console.log(props.phonetic);
    return (
    <div className="Phonetic row">
        <div className="col-2">{props.phonetic.text}</div>
        <div className="col"><Audio audio={props.phonetic.audio}/></div>
    </div>
    );
}
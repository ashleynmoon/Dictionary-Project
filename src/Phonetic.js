import React from "react";
import Audio from "./Audio.js";
import "./Phonetic.css";

export default function Phonetic(props){
    return (
    <div className="Phonetic">
        <div><Audio audio={props.phonetic.audio}/></div>
        <div className="text">{props.phonetic.text}</div>
    </div>
    );
}
import React from "react";
import Meaning from "./Meaning";
import "./Word.css"

export default function Word(props){
    console.log(props.fullData)
    if(props.fullData) { 
        return (
            <div className="everything">
    <div className="body">
        <div className="word">
        <h1>{props.words}</h1> 
        </div>
        <div className="phonetic">
        <p>{props.fullData.phonetic}</p>
        </div>
        <div className="meanings">
        <span>{props.fullData.meanings.map(function (meaning, index){
            return( <div key={index}> 
            <Meaning meaning={meaning}/>
            </div>)
        })}</span>
        </div>
    </div>
    </div>
    )
    }
    else {
        return null
    }
}
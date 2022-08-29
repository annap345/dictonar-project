import React from "react";
import Meaning from "./Meaning";

export default function Word(props){
    console.log(props.fullData)
    if(props.fullData) { 
        return (
    <div>
        <h1>{props.words}</h1> 
        <p>{props.fullData.meanings.map(function (meaning, index){
            return( <div key={index}> 
            <Meaning meaning={meaning}/>
            </div>)
        })}</p>
    </div>
    )
    }
    else {
        return null
    }
}
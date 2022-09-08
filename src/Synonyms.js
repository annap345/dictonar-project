import React from "react";
import "./Synonym.css"

export default function Synonyms(props){
    if (props.synonym.length === 0 ) {
        return null;
    } else {
        return (<span><strong>Synonyms: </strong>{props.synonym.map(function (synonyms, index){
            return <span key={index}>{synonyms};  </span>
        })}</span>);
    }
}
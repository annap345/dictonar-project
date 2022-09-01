import React from "react";

export default function Synonyms(props){
    if (props.synonym.length === 0 ) {
        return null;
    } else {
        return (<span><strong>Synonyms:</strong>{props.synonym.map(function (synonyms, index){
            return <ul key={index}><li>{synonyms}</li></ul>
        })}</span>);
    }
}
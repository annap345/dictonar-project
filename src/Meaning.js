import React from "react"
import Synonyms from "./Synonyms"
import "./Meaning.css"

export default function Meaning(props){
    console.log(props.meaning)
    return (<div>
    <h3>{props.meaning.partOfSpeech}</h3>
    <ul className="definitions">{props.meaning.definitions[0].definition}</ul>
    <Synonyms synonym={props.meaning.synonyms} />
    </div>
    )
}
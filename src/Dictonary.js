import axios from "axios";
import React, { useState } from "react";
import "./Dictonary.css"



export default function Dictonary(){
let [value, setValue]= useState('hello')
let [word, setWord] = useState('')


function dictCall(response){
    console.log(response.data)
    setWord(response.data[0].word)
}


function currentValue(event) {
 setValue(event.target.value)

}


function seacrhing(event){
event.preventDefault()
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
 axios.get(url).then(dictCall)
}

    return <div className="Body">
    <form onSubmit={seacrhing}>
         <input type="search" autoFocus={true} onChange={currentValue}/>
    </form>
    <div><h1>{word}</h1></div>
    
    </div>
}
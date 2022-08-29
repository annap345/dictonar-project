import axios from "axios";
import React, { useState } from "react";
import "./Dictonary.css"
import Word from "./Word";



export default function Dictonary(){
let [value, setValue]= useState('')
let [data, setData] = useState('');
let [word, setWord]=useState('')

function dictCall(response){
    console.log(response.data[0])
    
    
    setWord(response.data[0].word)
    setData(response.data[0])
//meanings[0].definitions[0].definition
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
    <Word words={word} fullData={data}/>
    </div>
}
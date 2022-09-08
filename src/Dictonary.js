import axios from "axios";
import React, { useState } from "react";
import "./Dictonary.css"
import Word from "./Word";
import Photos from "./Photos";


export default function Dictonary(){
let [value, setValue]= useState('')
let [data, setData] = useState('');
let [word, setWord]=useState('')
let [image, setImage]= useState();

function photoCall(response){
    //console.log(response.data)
    console.log(response.data.photos)
    setImage(response.data.photos)
}

function dictCall(response){
    console.log(response.data[0])
    
    
    setWord(response.data[0].word)
    setData(response.data[0])
}


function currentValue(event) {
 setValue(event.target.value)
}



function seacrhing(event){
event.preventDefault()
let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`
 axios.get(url).then(dictCall)

 let apiKey = '563492ad6f917000010000013c23ad40d2ee451397b62f934ec0068a'
 let urlPhoto = `https://api.pexels.com/v1/search?query=${value}&per_page=1`
 axios.get(urlPhoto, {headers: {Authorization: `Bearer ${apiKey}`}}).then(photoCall)

}

    return <div className="Body">
    <form onSubmit={seacrhing}>
         <input type="search" autoFocus={true} onChange={currentValue} className="searching"/>
         <input type="submit" value="submit" className="button" onSubmit={seacrhing}/>
    </form>
    <Word className="words" words={word} fullData={data}/>
    <Photos photoInfo={image}  />
    </div>
}
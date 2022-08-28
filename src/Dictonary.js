import React, { useState } from "react";
import "./Dictonary.css"



export default function Dictonary(){
let [value, setValue]= useState('')

function currentValue(event) {
 setValue(event.target.value)

}


function seacrhing(event){
event.preventDefault()
return {value}
}

    return <div className="Body">
    <form onSubmit={seacrhing}>
         <input type="search" autoFocus={true} onChange={currentValue}/>
    </form>
    <h1>{value}</h1>
    </div>
}
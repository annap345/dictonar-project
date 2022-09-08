import React from "react";
import './Photos.css'

export default function Photos(props){

//let firstPic = props.photoInfo[0].url
if (props.photoInfo) {
    return (
    <div className="all">
        <div className="photoBody">
        <section>{props.photoInfo.map(function(photo, index){
            return (
                <img src={photo.src.medium} alt='' key={index}/>
            )
        })}</section>
    </div>
    </div>)
    } else{
        return null;
    }
}
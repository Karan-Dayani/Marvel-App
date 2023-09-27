import React from "react";

export default function Main(props) {
    return (
        <main>
            <img className="main-img" src={`${props.charArr[0].thumbnail.path}.${props.charArr[0].thumbnail.extension}`} alt=""></img>
            <h1 className="main-name">{props.charArr[0].name}</h1>
            <p className="main-description">{props.charArr[0].description}</p>
        </main>
    )
}
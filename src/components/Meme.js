import React, { useState } from "react";
import "../Meme.css";
import data from "../memesData";

function Meme(){

    const [memeImage, setMemeImage] = useState("")
    
    function handleClick(){
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMemeImage(url)
    }  
    return(
        <main>
            <div className = "form">
                <input 
                    type = "text" 
                    className = "form--inputs"
                    placeholder = "Top text"
                />
                <input 
                    type = "text" 
                    className = "form--inputs"
                    placeholder = "Bottom text"
                />
                <button 
                    className = "form--button"
                    onClick={handleClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img alt="" src = {memeImage} className="meme--image"/>

        </main>
    )
}

export default Meme;
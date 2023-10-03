import React from "react";
import "../Meme.css";
import data from "../memesData";

function Meme(){
    function handleClick(){
        const memesArray = data.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        console.log(url)
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

        </main>
    )
}

export default Meme;
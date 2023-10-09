import React, { useState } from "react";
import "../Meme.css";
import memesData from "../memesData";

function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = useState(memesData)
    
    function handleClick(){
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevState => ({...prevState, randomImage: url}))
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
            <img alt="" src = {meme.randomImage} className="meme--image"/>

        </main>
    )
}

export default Meme;
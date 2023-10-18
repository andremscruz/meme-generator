import React, { useState } from "react";
import "../Meme.css";

function Meme(){

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage:"http://i.imgflip.com/1bij.jpg" 
    })

    const [allMeme, setAllMeme] = useState([])

    React.useEffect(() => {
        fetch(`https://api.imgflip.com/get_memes`)
        .then(res => res.json())
        .then(data => setAllMeme(data.data.memes))
    },[])
    
    function handleClick(){
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevState => ({...prevState, randomImage: url}))
    }  

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme=> ({
            ...prevMeme,
            [name]: value
        }))
    }
    return(
        <main>
            <div className = "form">
                <input 
                    type = "text" 
                    className = "form--inputs"
                    placeholder = "Top text"
                    name="topText"
                    onChange={handleChange}
                    value={meme.topText}
                />
                <input 
                    type = "text" 
                    className = "form--inputs"
                    placeholder = "Bottom text"
                    name="bottomText"
                    onChange={handleChange}
                    value={meme.bottomText}
                />
                <button 
                    className = "form--button"
                    onClick={handleClick}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img alt="" src={meme.randomImage} className="meme--image" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>

        </main>
    )
}

export default Meme;
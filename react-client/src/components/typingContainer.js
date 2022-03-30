import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';


function TypingContainer() {

    const [userInput, setUserInput] = useState('')
    const [userInputArray, setUserInputArray] = useState([])

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)
    const [snippetArray, setSnippetArray] = useState([currentSnippet.split('')])

    
    const handleChange = (e) => {
        const textAreaInput = e.target.value
        setUserInput(textAreaInput)
        setUserInputArray(userInput.split(''))
        // const snippetArraySpan = snippetArray.querySelectorAll('span')
        let correct = true

        snippetArray.forEach((characterSpan, index) => {
            const character = userInputArray[index]
            // if (character == null) {
            //     characterSpan.className.remove('correct')
            //     characterSpan.className.remove('incorrect')
            //     correct = false
            // } else 
            if (character == characterSpan.innerText) {
                characterSpan.className='correct'
            } else {
                characterSpan.className='incorrect'
                correct = false
            }
        })



    }
    
     
    return (

        <div className="card" id="typing-container">
            <Stats />
            <div className="snippet" id="snippet"> { jsSubString } </div>
            
            <textarea className="user-input" id="userInput" spellCheck="false" placeholder='Start Typing...' onChange={handleChange}></textarea>
        </div>

    )


}


export default TypingContainer;
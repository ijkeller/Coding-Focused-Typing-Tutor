import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';


function TypingContainer() {

    const [userInput, setUserInput] = useState('')
    const [userInputArray, setUserInputArray] = useState([])

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)
    const [snippetArray, setSnippetArray] = useState([])

    setSnippetArray(currentSnippet.split(''))
    console.log(snippetArray)

    const handleSubmit = (e) => {
        console.log('handleSubmit')
        setSnippetArray(currentSnippet.split(''))
        console.log(snippetArray)
    }
    
    
    const handleChange = (e) => {
        const textAreaInput = e.target.value
        setUserInput(textAreaInput)
        setUserInputArray(userInput.split(''))
    }
    
     
    return (

        <div className="card" id="typing-container">
            <Stats />
            <div className="snippet" id="snippet"> { jsSubString } </div>
            
            <textarea className="user-input" id="userInput" spellCheck="false" placeholder='Start Typing...' onChange={handleChange}></textarea>
            <button onClick={handleSubmit}>Submit</button>
        </div>

    )


}


export default TypingContainer;
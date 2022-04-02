import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';
import Span from './span';


function TypingContainer() {

    

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)

    const snippetArray = currentSnippet.split('')

    let userInput = ''

    const displaySnippet = snippetArray.map((snippet, i) => (
            <Span
                // 
                key={i}
                id={i}
                snippetCharacter={snippet}
            />)
    )
    
    

    const handleChange = (e) => {
        const textAreaInput = e.target.value

        userInput = textAreaInput.split('')

        userInput.map((userCharacter, i) => (

            <Span
            userCharacter={userCharacter}
            />

        ))


    }

    return (

        <div className="card" id="typing-container">
            <Stats />
            <div className="snippet" id="snippet"> {displaySnippet} </div>

            <textarea className="user-input" id="userInput" spellCheck="false" placeholder='Start Typing...' onChange={handleChange}></textarea>
        </div>

    )
}

export default TypingContainer;
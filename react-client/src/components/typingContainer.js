import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';
import Span from './span';


function TypingContainer() {

    // useState for snippet and user input
    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)
    const [userInput, setUserInput] = useState('')

    // convert current snippet
    const snippetObject = currentSnippet.split('')

    // display snippet in seperate spans
    const displaySnippet = snippetObject.map((snippet, index) => (

        <Span
            userInput={userInput}
            key={index}
            index={index}
            snippetCharacter={snippet}
        />)

    )

    const handleChange = (e) => {

        setUserInput(e.target.value.split(''))

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
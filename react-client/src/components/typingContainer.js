import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';
import Span from './span';


function TypingContainer() {

    let userInput = ''

    const [correctClass, setCorrectClass] = useState(false)
    const [incorrectClass, setIncorrectClass] = useState(false)

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)

    const snippetArray = currentSnippet.split('')
    
    const displaySnippet = snippetArray.map((snippet, i) => (
            <Span
                correctClass={correctClass}
                incorrectClass={incorrectClass}
                key={i}
                id={i}
                snippetCharacter={snippet}
            />)
    )
    

    const handleChange = (e) => {
        const textAreaInput = e.target.value

        userInput = textAreaInput
        
        const splitInput = userInput.split('')

        let correct = true

        snippetArray.forEach((snippetCharacter, index) => {
            const userCharacter = userInput[index]
            
             if (userCharacter == undefined) {
                console.log('(userCharacter == undefined) returned: ' + (userCharacter == undefined))
                // getElementbyId
                displaySnippet[index](correctClass(false))
                displaySnippet[index](incorrectClass(false))
                correct = false
            } else if (userCharacter == snippetCharacter) {
                console.log('(userCharacter == snippetCharacter) returned: ' + (userCharacter == snippetCharacter)) // 
                displaySnippet[index](correctClass(true))
                displaySnippet[index](incorrectClass(false))
            } else {
                console.log('else ran')
                displaySnippet[index](correctClass(false))
                displaySnippet[index](incorrectClass(true))
                correct = false
            }

        })
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
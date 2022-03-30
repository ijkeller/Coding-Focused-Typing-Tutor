import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';


function TypingContainer() {

    const [userInput, setUserInput] = useState('')
    const [userInputArray, setUserInputArray] = useState([])

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)

    console.log('---------------forSnippetArray------------')
    console.log('currentSnippet: ' + currentSnippet)
    const forSnippetArray = []
    console.log(currentSnippet.length)
    for (let i = 0; i <= currentSnippet.length; i++) {
        forSnippetArray.push(`<span>${currentSnippet[i]}</span>`)
    }
    console.log('forSnippetArray.length: ' + forSnippetArray.length)
    console.log('forSnippetArray: ' + forSnippetArray)
    console.log('---------------forSnippetArray------------')


    const handleChange = (e) => {
        const textAreaInput = e.target.value
        setUserInput(textAreaInput)
        setUserInputArray(userInput.split(''))

        // const snippetArraySpan = snippetArray.querySelectorAll('span')
        let correct = true

        forSnippetArray.forEach((snippetCharacter, index) => {
            const character = userInputArray[index]
            if (character == null) {
                // snippetCharacter.removeClass('correct')
                // snippetCharacter.removeClass('incorrect')
                correct = false
            } else if (character == snippetCharacter.innerText) {
                snippetCharacter.addClass('correct')
            } else {
                snippetCharacter.addClass('incorrect')
                correct = false
            }
        })

    }

    return (

        <div className="card" id="typing-container">
            <Stats />
            <div className="snippet" id="snippet"> {jsSubString} </div>

            <textarea className="user-input" id="userInput" spellCheck="false" placeholder='Start Typing...' onChange={handleChange}></textarea>
        </div>

    )
}

export default TypingContainer;
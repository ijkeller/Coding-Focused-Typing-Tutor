import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';
import Span from './span';


function TypingContainer() {

    let userInput = ''

    const [correctClass, setCorrectClass] = useState(false)
    const [incorrectClass, setIncorrectClass] = useState(false)

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)

    const snippetArray = currentSnippet.split('').map((snippet, i) => (
            <Span
                correctClass={correctClass}
                incorrectClass={incorrectClass}
                key={i}
                snippetCharacter={snippet}
            />)
    )

    console.log('before handleChange: currentSnippet[0]: ' + currentSnippet[0]) // f
    console.log('before handleChange: snippetArray[0]: ' + snippetArray[0]) // [object object]
    console.log('-----------------')
    
    const handleChange = (e) => {
        const textAreaInput = e.target.value
        // console.log('in handleChange: textAreaInput: ' + textAreaInput) // asd
        userInput = textAreaInput
        console.log('in handleChange: userInput: ' + userInput) // asd
        console.log('in handleChange: userInput[0]: ' + userInput[0]) // asd
        const splitInput = userInput.split('')
        // console.log("in handleChange: userInput.split(''): " + userInput.split('')) // a,s,d
        console.log('in handleChange: splitInput: ' + splitInput) // a,s,d
        console.log('in handleChange: splitInput[0]: ' + splitInput[0]) // a
        console.log('in handleChange: splitInput[2]: ' + splitInput[2]) // d
        console.log('***********')

        let correct = true

        snippetArray.forEach((snippetCharacter, index) => {
            console.log('in handleChange/snippetArray.for Each: snippetCharacter: ' + snippetCharacter) // [object object]
            console.log('in handleChange/snippetArray.for Each: snippetCharacter.innerText: ' + snippetCharacter.innerText) // undefined
            console.log('in handleChange/snippetArray.for Each: snippetCharacter.value: ' + snippetCharacter.value) // undefined
            const userCharacter = userInput[index]
            console.log('in handleChange/snippetArray.for Each: userCharacter = ' + userCharacter) // 
            console.log('+++++++++++++++++')
            if (userCharacter == undefined) {
                setCorrectClass(false)
                setIncorrectClass(false)
                correct = false
            } else if (userCharacter == snippetCharacter) {
                setCorrectClass(true)
                setIncorrectClass(false)
            } else {
                setCorrectClass(false)
                setIncorrectClass(true)
                correct = false
            }

        })
    }

    return (

        <div className="card" id="typing-container">
            <Stats />
            <div className="snippet" id="snippet"> {snippetArray} </div>

            <textarea className="user-input" id="userInput" spellCheck="false" placeholder='Start Typing...' onChange={handleChange}></textarea>
        </div>

    )
}

export default TypingContainer;
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
    console.log('before handleChange: currentSnippet[2]: ' + currentSnippet[2]) // r
    console.log('before handleChange: snippetArray[0]: ' + snippetArray[0]) // [object object] - snippetArray should only be used for display
    console.log('before handleChange: snippetArray[2]: ' + snippetArray[2]) // [object object]
    console.log('before handleChange: userInput: ' + userInput) // (nothing shown)
    console.log('before handleChange: userInput[0]: ' + userInput[0]) // undefined
    console.log('before handleChange: userInput[2]: ' + userInput[2]) // undefined
    console.log('-----------------')
    
    const handleChange = (e) => {
        const textAreaInput = e.target.value
        // console.log('in handleChange: textAreaInput: ' + textAreaInput) // asdf
        userInput = textAreaInput
        console.log('in handleChange: userInput: ' + userInput) // asdf
        console.log('in handleChange: userInput[0]: ' + userInput[0]) // a
        console.log('in handleChange: userInput[2]: ' + userInput[2]) // d
        const splitInput = userInput.split('')
        // console.log("in handleChange: userInput.split(''): " + userInput.split('')) // a,s,d,f
        console.log('in handleChange: splitInput: ' + splitInput) // a,s,d,f
        console.log('in handleChange: splitInput[0]: ' + splitInput[0]) // a
        console.log('in handleChange: splitInput[2]: ' + splitInput[2]) // d - doesn't look like there's a need for splitInput, does the same as userInput
        console.log('in handleChange: currentSnippet[0]: ' + currentSnippet[0]) // f
        console.log('in handleChange: currentSnippet[2]: ' + currentSnippet[2]) // r
        console.log('in handleChange: snippetArray[0]: ' + snippetArray[0]) // [object object] - snippetArray should only be used for display
        console.log('in handleChange: snippetArray[2]: ' + snippetArray[2]) // [object object]
        console.log('***********')

        let correct = true

        currentSnippet.forEach((snippetCharacter, index) => { // - for each loop is causeing a problem somewhere
            // console.log('-----in handleChange/snippetArray.forEach: -----')
            // console.log('snippetCharacter: ' + snippetCharacter) // [object object] - how do I access the value inside the span?
            // console.log('snippetCharacter.innerText: ' + snippetCharacter.innerText) // undefined
            // console.log('snippetCharacter.innerHTML: ' + snippetCharacter.innerHTML) // undefined
            // console.log('snippetCharacter.value: ' + snippetCharacter.value) // undefined
            // console.log('+++++++++++++++++')
            const userCharacter = userInput[index]
            // console.log('in handleChange/snippetArray.for Each: userCharacter = ' + userCharacter) // undefined
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
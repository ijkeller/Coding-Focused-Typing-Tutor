import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';
import Span from './span';


function TypingContainer() {

    // useState for snippet and user input
    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)
    const [userInput, setUserInput] = useState('')
    const [userActive, setUserActive] = useState(false)
    const [resetTimer, setResetTimer] = useState(false)
    const [errorCounter, setErrorCounter] = useState(0)

    // convert current snippet
    const snippetObject = currentSnippet.split('')

    // display snippet in seperate spans
    const displaySnippet = snippetObject.map((snippet, index) => (
        <Span
            userInput={userInput}
            key={index}
            index={index}
            snippetCharacter={snippet}
        />
    ))

    function errorHandler() {
        
        for (let i = 0; i < snippetObject.length; i++ ){
            if ((userInput[i] != undefined) && (userInput[i] != snippetObject[i])) {
                console.log('errorCounter + 1')
                setErrorCounter(errorCounter + 1)
            }
        }
    }



    // const onFocus = (() => (userInput[0] != undefined) ? console.log('onFucos, user active') : console.log('onFocus, but no input') )
    const onFocus = () => (setUserActive(true))
    const onBlur = () => setUserActive(false)

    const chrTyped = userInput.length

    console.log('TC container, chrTyped: ' + chrTyped)
    console.log('TC, typeof chrTyped: ' + typeof chrTyped)
    console.log('TC errorCounter: ' + errorCounter)
    console.log("TC typeof errorCounter: " + typeof errorCounter)
    console.log('+++++++++++++++++++++++++')

    // console.log('resetTimer: ' + resetTimer)

    // console.log('userActive: ' + userActive)
    // console.log('userInput[0]: ' + userInput[0])

    const handleChange = (e) => {

        setUserInput(e.target.value)
        errorHandler()


        if (userInput.length >= snippetObject.length)

            return (

                setResetTimer(true),
                setUserActive(false),
                setUserInput('')

            )

    }

    return (

        <div className="card" id="typing-container">
            <Stats userActive={userActive} reset={resetTimer} chrTyped={chrTyped} errorHandler={errorHandler} errorCounter={errorCounter} />
            <div className="snippet" id="snippet"> {displaySnippet} </div>

            <textarea className="user-input" id="userInput" spellCheck="false" placeholder='Start Typing...' onChange={handleChange} onFocus={onFocus} onBlur={onBlur} value={userInput}></textarea>
        </div>

    )
}

export default TypingContainer;
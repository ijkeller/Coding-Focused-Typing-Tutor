import React, { useState, useEffect } from 'react';
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

    console.log('resetTimer is ' + resetTimer)

    const chrTyped = userInput.length
    const validChar = currentSnippet.slice(0, chrTyped)

    // function errorHandler() {

    //     for (let i = 0; i < snippetObject.length; i++) {

    //         if (validChar[i] != userInput[i]) {

    //             setErrorCounter(errorCounter + 1)

    //         } else {
    //             console.log('returned false')
    //         }
    //     }
    // }


    const boolInput = (userInput[0] != undefined)

    // const onFocus = () => {

    //     if (boolInput) {
    //         console.log('if statement returns true')
    //         userActive = true
    //         console.log('userActive is ' + userActive)
    //     } else {
    //         console.log('onFocus, but no input')
    //     }
    // }

    const onFocus = () => setUserActive(true)
    const onBlur = () => setUserActive(false)

    // console.log('userActive is ' + userActive)


    const handleChange = (e) => {

        setUserInput(e.target.value)
        // errorHandler()


        // if (userInput.length == currentSnippet.length)

        //     return (

        //         setResetTimer(true),
        //         setUserActive(false),
        //         setUserInput(''),
        //         setCurrentSnippet(''),
        //         setCurrentSnippet(jsSubString)
        //     )
    }


    useEffect(() => {
        setCurrentSnippet(jsSubString);
    }, [jsSubString])

    function reset() {
        return (
            setResetTimer(true),
            setUserActive(false),
            setUserInput('')
            
            
        )
    }

    console.log('---------------')

    return (

        <div className="card" id="typing-container">
            <Stats userActive={userActive} reset={resetTimer} chrTyped={chrTyped} errorCounter={errorCounter} />
            <div className="snippet" id="snippet"> {displaySnippet} </div>

            <textarea className="user-input" id="userInput" spellCheck="false" placeholder='Start Typing...' onChange={handleChange} onFocus={onFocus} onBlur={onBlur} value={userInput}></textarea>
            <button className='reset' id='reset' onClick={() => { setUserActive(false); reset(); }}>Reset</button>
        </div>

    )
}

export default TypingContainer;
import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';


function Span(props) {

    // const [correctClass, setCorrectClass] = useState(false)
    // const [incorrectClass, setIncorrectClass] = useState(false)

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)

    const snippetArray = currentSnippet.split('')

    let correctClass = false
    let incorrectClass = false

    let correct = true

    snippetArray.forEach((snippetCharacter, index) => {

        const userCharacter = props.userInput[index]
        
        console.log('userCharacter: ' + userCharacter + ' ' + index)
        console.log('snippetCharacter: ' +  snippetCharacter + ' ' + index)
        

        if (userCharacter == undefined) {
            console.log('(userCharacter == undefined) returned: ' + (userCharacter == undefined))
            // setCorrectClass(false)
            // setIncorrectClass(false)
            correct = false
        } else if (userCharacter == snippetCharacter) {
            // console.log('(userCharacter == snippetCharacter) returned: ' + (userCharacter == snippetCharacter))
            correctClass = true
            // setIncorrectClass(false)
        } else {
            // console.log('else ran')
            // setCorrectClass(false)
            incorrectClass = true
            correct = false
        }

    })

    return (

        <span
            key={props.i}
            className={
                `${correctClass ? 'correct' : ''}${incorrectClass ? 'incorrect' : ''}`
            }
            id={`sp${props.id}`} >
            {props.snippetCharacter}
        </span>

    )
}

export default Span;
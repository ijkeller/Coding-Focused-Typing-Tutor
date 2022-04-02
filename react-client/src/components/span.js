import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';


function Span(props) {

    const [correctClass, setCorrectClass] = useState(false)
    const [incorrectClass, setIncorrectClass] = useState(false)

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)


    const snippetArray = currentSnippet.split('')

    let correct = true

    snippetArray.forEach((snippetCharacter, index) => {

        const userCharacter = props.userInput[index]

        console.log('in forEach, userInput[index]: ' + props.userInput[index])
        console.log('in forEach, userCharacter: ' + userCharacter)
        console.log('--------------------')
        
        
        
        if (userCharacter == undefined) {
            // console.log('(userCharacter == undefined) returned: ' + (userCharacter == undefined))

            correct = false
        } else if (userCharacter == snippetCharacter) {
            // console.log('(userCharacter == snippetCharacter) returned: ' + (userCharacter == snippetCharacter))

        } else {
            // console.log('else ran')

            correct = false
        }

    })









    return (

        <span
            key={props.i}
            // className={
            //     `${props.correctClass ? 'correct' : ''}${props.incorrectClass ? 'incorrect' : ''}`
            // }
            id={`sp${props.id}`} >
            {props.snippetCharacter}
        </span>

    )
}

export default Span;
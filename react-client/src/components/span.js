import React, { useState } from 'react';
import { jsSubString } from './jsSnippet';


function Span(props) {

    // const [correctClass, setCorrectClass] = useState(false)
    // const [incorrectClass, setIncorrectClass] = useState(false)

    const [currentSnippet, setCurrentSnippet] = useState(jsSubString)

    const snippetArray = currentSnippet.split('')

    let correctClass = false
    let incorrectClass = false

    

    snippetArray.forEach((snippetCharacter, index) => {

        const userCharacter = props.userInput[index]
        
        console.log('uc: ' + userCharacter + ' == sc: ' + snippetCharacter + ' ' + (userCharacter == snippetCharacter))

        if (userCharacter == undefined) {

            return ''

        } else if (userCharacter == snippetCharacter) {

            return 'correct'

        } else {
            
            return 'incorrect'

        }

    })

    return (

        <span
            key={props.i}
            className={classFunction(props.i)}
            id={`sp${props.id}`} >
            {props.snippetCharacter}
        </span>

    )

    
}

export default Span;
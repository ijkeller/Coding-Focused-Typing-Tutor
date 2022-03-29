import React from 'react';
import { jsSubString } from './jsSnippet';
import Stats from './stats';




function TypingContainer() {


    // inputElement.addEventListener('input', () => {
    //     const arraySnippet = snippetElement.querySelectorAll('span')
    //     const arrayInputValue = inputElement.value.split('')
    //     let correct = true

    //     arraySnippet.forEach((characterSpan, index) => {
    //         const character = arrayInputValue[index]
    //         if (character == null) {
    //             characterSpan.classList.remove('correct')
    //             characterSpan.classList.remove('incorrect')
    //             correct = false
    //         } else if (character == characterSpan.innerText) {
    //             characterSpan.classList.add('correct')
    //             characterSpan.classList.remove('incorrect')
    //         } else {
    //             characterSpan.classList.add('incorrect')
    //             characterSpan.classList.remove('correct')
    //             correct = false
    //         }
    //     })

    //     if (correct) newSnippet(), console.log("fini")
    // })


    // async function newSnippet() {
    //     const snippetText = snippetElement.innerText
    //     snippetElement.innerHTML = ''
    //     snippetText.split('').forEach(character => {
    //         const characterSpan = document.createElement('span')
    //         characterSpan.innerText = character
    //         snippet.appendChild(characterSpan)
    //     })
    //     userInput.value = null
    //     startTimer()
    // }

    // newSnippet()


    return (

        <div className="card" id="typing-container">
            <Stats />
            <div className="snippet" id="snippet">Mauris congue euismod metus non laoreet. Phasellus tempus convallis sem eu varius. In interdum mollis sem. Phasellus id erat a est blandit finibus. Morbi facilisis pulvinar lacus, in ultrices lorem suscipit sit amet. </div>
            <textarea className="user-input" id="userInput" spellcheck="false" placeholder='Start Typing...' onClick=''></textarea>
        </div>

    )


}


export default TypingContainer;
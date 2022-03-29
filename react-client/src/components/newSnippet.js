import React from 'react';
import { jsString } from './components/snippet';




function NewSnippet() {
    const snippetElement = document.getElementById('snippet')
    const inputElement = document.getElementById('userInput')



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

}




export default NewSnippet;
/* 
    https://www.youtube.com/watch?v=R-7eQIHRszQ 
    Code modified from Web Dev Simplified Typing Game Tutorial
*/

const snippetElement = document.getElementById('snippet')
const inputElement = document.getElementById('userInput')

inputElement.addEventListener('input', () => {
    const arraySnippet = snippetElement.querySelectorAll('span')
    const arrayInputValue = inputElement.value.split('')
    arraySnippet.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
        }
    })
})



async function newSnippet() {
    quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.classList.add('correct')
        characterSpan.innerText = character
        snippet.appendChild(characterSpan)
    })
    userInput.value = null
}

newSnippet()







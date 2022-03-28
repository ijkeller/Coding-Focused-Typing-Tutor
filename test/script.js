/* 
    https://www.youtube.com/watch?v=R-7eQIHRszQ 
    Code modified from Web Dev Simplified Typing Game Tutorial
*/

const snippetElement = document.getElementById('snippet')
const inputElement = document.getElementById('userInput')

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







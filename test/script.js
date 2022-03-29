/* 
    https://www.youtube.com/watch?v=R-7eQIHRszQ 
    Code modified from Web Dev Simplified Typing Game Tutorial
*/

const snippetElement = document.getElementById('snippet')
const inputElement = document.getElementById('userInput')
const timerElement = document.getElementById('timer')

inputElement.addEventListener('input', () => {
    const arraySnippet = snippetElement.querySelectorAll('span')
    const arrayInputValue = inputElement.value.split('')
    let correct = true

    arraySnippet.forEach((characterSpan, index) => {
        const character = arrayInputValue[index]
        if (character == null) {
            characterSpan.classList.remove('correct')
            characterSpan.classList.remove('incorrect')
            correct = false
        } else if (character == characterSpan.innerText) {
            characterSpan.classList.add('correct')
            characterSpan.classList.remove('incorrect')
        } else {
            characterSpan.classList.add('incorrect')
            characterSpan.classList.remove('correct')
            correct = false
        }
    })

    if (correct) newSnippet(), console.log("fini") 
})



async function newSnippet() {
    const snippetText = snippetElement.innerText
    snippetElement.innerHTML = ''
    snippetText.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        snippet.appendChild(characterSpan)
    })
    userInput.value = null
    startTimer()
}

let startTime
function startTimer() {
    timerElement.innerText = 0.0
    startTime = new Date()
    setInterval(() => {
        timer.innerText = getTimerTime()
    }, 1000)
}

function getTimerTime() {
    return Math.floor((new Date() - startTime) / 1000)
}

newSnippet()









// 3 or 4 lines, random words, commands, variables, symbols

// case goes by language best practice

// base - Javascript theen languages by popularity

// 

const jsSnippet = ['var items = ["a","e","i","o","u"] var objResults = {} for(var i = 0; i < 1000000; i++){ var randomElement = items[Math.floor(Math.random()*items.length)]', "if (objResults[randomElement]){ objResults[randomElement]++ }else{ objResults[randomElement] = 1 } } console.log(objResults)", "var randomArray = (['#cc0000','#00cc00', '#0000cc']); // use _.sample var randomElement = _.sample(randomArray);", "var button = document.getElementById('enter'); var input = document.getElementById('userinput'); var ul = document.querySelector('ul');", "function inputLength() { return input.value.length; } function addListAfterClick() { if (inputLength() > 0) { createListElement(); } }", "function createListElement() { var li = document.createElement('li'); li.appendChild(document.createTextNode(input.value)); ul.appendChild(li); input.value = '' } }"]

let jsString = jsSnippet.join(' ')

const jsSubString = jsSnippet[Math.floor(Math.random()*jsSnippet.length)]



export { jsSubString }

let randomNumber = parseInt(Math.random()*100+1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let preGuess = [];
let count = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess) || guess<1 || guess>100) {
        alert("Please enter a valid number");
    }
    else{
        preGuess.push(guess);
        if (count==11) {
            displayGuess(guess);
            displayMessage(`Game Over!!! Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess===randomNumber) {
        displayMessage(`Hey!!! You guessed it right`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Number is TOO low`);
    }
    else{
        displayMessage(`Number is TOO high`);
    }
}
function displayGuess(guess) {
    userInput.value = '';
    guessSlot.innerHTML += `${guess}    `;
    count++;
    
    remaining.innerHTML = `${11-count}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',(e)=>{
        randomNumber = parseInt(Math.random()*100+1);
        preGuess = [];
        count = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11-count}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);

        playGame = true;
    })
}
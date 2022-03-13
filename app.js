const message = document.querySelector('.message');
const player1score = document.querySelector('.player-1-score')
const player2score = document.querySelector('.player-2-score')
const player1dice = document.querySelector('#player-1-dice')
const player2dice = document.querySelector('#player-2-dice')
const rollBtn = document.querySelector('.roll-btn')
const resetBtn = document.querySelector('.reset-btn')

let player1 = 0;
let player2 = 0;
let player1turn = true;
let messageReq = `<br><span>(20 points wins the game)</span>`;

function resetGame() {
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
}

function diceNumber() {
    let num = Math.floor ( Math.random() * 6) + 1;
    
    if (player1turn) {
        player1 += num;
        message.textContent = 'Player 2 Turn'
        message.innerHTML +=  messageReq;
        player1dice.textContent = player1;
        player1dice.classList.remove('active');
        player2dice.classList.add('active')
    } else {
        player2 += num;
        message.textContent = 'Player 1 Turn'
        message.innerHTML +=  messageReq;
        player2dice.textContent = player2;
        player2dice.classList.remove('active');
        player1dice.classList.add('active')
    }

    player1turn = !player1turn

    if (player1 >= 20) {
        message.textContent = 'Player 1 has won the game!'
        resetGame()
    } else if (player2 >= 20) {
        message.textContent = 'Player 2 has won the game!'
        resetGame();
    }
}

rollBtn.addEventListener('click', diceNumber)
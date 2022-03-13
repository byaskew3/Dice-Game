const message = document.querySelector('.message');
const subMessage = document.querySelector('.sub-message')
const player1score = document.querySelector('.player-1-score')
const player2score = document.querySelector('.player-2-score')
const player1dice = document.querySelector('#player-1-dice')
const player2dice = document.querySelector('#player-2-dice')
const firstRollbtn = document.querySelector('.first-roll-btn')
const startGameBtn = document.querySelector('.start-game-btn')
const rollBtn = document.querySelector('.roll-btn')
const resetBtn = document.querySelector('.reset-btn')

let player1 = 0;
let player2 = 0;
let player1turn = true;
let headsTails = 0;
let messageReq = `<br><span>(20 points wins the game)</span>`;


function firstRoll() {
    let turns = 0;
    let bothPlayersRolled = false;
    message.textContent = 'Roll to determine first possession'
    message.style.fontSize = '30px';
    player1score.textContent = 'Player 1'
    player1dice.classList.add('active')
    player2score.textContent = 'Player 2'
    firstRollbtn.addEventListener('click', function() {
        let num = Math.floor ( Math.random() * 100) + 1;
        if (player1turn) {
            player1 = num;
            player1dice.textContent = player1;
            player1dice.classList.remove('active');
            player2dice.classList.add('active')
        } else {
            player2 = num;
            player2dice.textContent = player2;
            player2dice.classList.remove('active');
            player1dice.classList.add('active')
        }
        turns++;
        player1turn = !player1turn;
        if (turns === 2) {
            bothPlayersRolled = true;
            checker()
        }
    })
}

function checker() {
    if (player1 > player2) {
        message.textContent = 'Player 1 goes first!'
        player2dice.classList.remove('active')
        player1dice.classList.add('active')
        subMessage.textContent = '';
        firstRollbtn.style.display = 'none'
        startGameBtn.style.display = 'inline-block'
    } else {
        message.textContent = 'Player 2 goes first!'
        player1turn = false;
        player1dice.classList.remove('active')
        player2dice.classList.add('active')
        subMessage.textContent = '';
        firstRollbtn.style.display = 'none'
        startGameBtn.style.display = 'inline-block'
    }
}

function startGame() {
    player1 = 0;
    player2 = 0;
    player1score.textContent = 'Score: 0'
    player2score.textContent = 'Score: 0'
    player1dice.textContent = '-'
    player2dice.textContent = '-'
    startGameBtn.style.display = 'none'
    rollBtn.style.display = 'inline-block'
    if (message.textContent === 'Player 1 goes first!') {
        message.textContent = 'Player 1 Turn'
    } else {
        message.textContent = 'Player 2 Turn'
    }
}

startGameBtn.addEventListener('click', startGame)


function diceNumber() {
    let num = Math.floor ( Math.random() * 6) + 1;
    subMessage.textContent = '';
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
        endGame()
    } else if (player2 >= 20) {
        message.textContent = 'Player 2 has won the game!'
        endGame();
    }
}

function endGame() {
    rollBtn.style.display = 'none';
    resetBtn.style.display = 'inline-block';
}
resetBtn.addEventListener('click', firstRoll)

rollBtn.addEventListener('click', diceNumber)

firstRoll();